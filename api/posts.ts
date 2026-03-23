import type { VercelRequest, VercelResponse } from '@vercel/node'

const NOTION_API_KEY = process.env.VITE_NOTION_API_KEY
const DB_ID = process.env.VITE_NOTION_CONTENT_DB_ID || '32a6e0a30d66813b8f7decb3aa457f60'

// 태그별 기본 이미지 매핑 (커버이미지 속성이 없을 때 사용)
const TAG_IMAGES: Record<string, string> = {
  '#오늘의목장': '/images/무지개초지_저지소01.png',
  '#젖소이야기': '/images/무지개초지_저지소02.png',
  '#생태순환': '/images/무지개초지.png',
  '#헤리티지': '/images/예수원 소개.png',
  '#제품이야기': '/images/유제품 소개.png',
  '#이벤트': '/images/무무목장 전경.png',
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${DB_ID}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filter: { property: '상태', select: { equals: '발행완료' } },
        sorts: [{ property: '발행순서', direction: 'ascending' }],
      }),
    })

    const data = await response.json()

    const posts = data.results.map((page: any, index: number) => {
      const props = page.properties
      const title = props['제목']?.title?.[0]?.plain_text || ''
      const summary = props['요약']?.rich_text?.[0]?.plain_text ||
                      props['짧은글']?.rich_text?.[0]?.plain_text?.slice(0, 100) || ''
      const tag = props['태그']?.multi_select?.[0]?.name || ''
      const tagFormatted = tag.startsWith('#') ? tag : `#${tag}`
      const dateStr = page.created_time

      // 커버이미지 속성 → 없으면 태그별 기본 이미지 → 없으면 순서별 목장 사진
      const fallbackImages = [
        '/images/무무목장 전경.png',
        '/images/무지개초지_저지소01.png',
        '/images/무지개초지 설경.png',
        '/images/무지개초지_저지소03.png',
        '/images/운해.png',
        '/images/우유마시는 아이.png',
        '/images/유제품_딸기요커트.png',
        '/images/축사 하늘사진.png',
        '/images/무지개초지_저지소04.png',
        '/images/유제품_블루베리요거트.png',
      ]
      const imageUrl = 
        props['커버이미지']?.files?.[0]?.file?.url ||
        props['커버이미지']?.files?.[0]?.external?.url ||
        TAG_IMAGES[tagFormatted] ||
        fallbackImages[index % fallbackImages.length]

      const videoUrl = props['영상URL']?.url || ''

      const date = new Date(dateStr).toLocaleDateString('ko-KR', {
        year: 'numeric', month: 'numeric', day: 'numeric',
      })

      return {
        id: page.id,
        slug: page.id,
        title,
        summary,
        date,
        tag: tagFormatted,
        imageUrl,
        hasVideo: !!videoUrl,
        videoUrl,
        status: '발행완료',
      }
    })

    res.status(200).json(posts)
  } catch (err) {
    res.status(500).json({ error: String(err) })
  }
}

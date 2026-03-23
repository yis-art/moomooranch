import type { VercelRequest, VercelResponse } from '@vercel/node'

const NOTION_API_KEY = process.env.VITE_NOTION_API_KEY

const TAG_IMAGES: Record<string, string> = {
  '#오늘의목장': '/images/무지개초지_저지소01.png',
  '#젖소이야기': '/images/무지개초지_저지소02.png',
  '#생태순환': '/images/무지개초지.png',
  '#헤리티지': '/images/예수원 소개.png',
  '#제품이야기': '/images/유제품 소개.png',
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  const { id } = req.query
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'id required' })
  }

  try {
    // 페이지 속성
    const pageRes = await fetch(`https://api.notion.com/v1/pages/${id}`, {
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28',
      },
    })
    const page: any = await pageRes.json()
    const props = page.properties

    const title = props['제목']?.title?.[0]?.plain_text || ''
    const summary = props['요약']?.rich_text?.[0]?.plain_text ||
                    props['짧은글']?.rich_text?.[0]?.plain_text?.slice(0, 120) || ''
    const tag = props['태그']?.multi_select?.[0]?.name || ''
    const tagFormatted = tag.startsWith('#') ? tag : `#${tag}`
    const imageUrl =
      props['커버이미지']?.files?.[0]?.file?.url ||
      props['커버이미지']?.files?.[0]?.external?.url ||
      TAG_IMAGES[tagFormatted] ||
      '/images/무무목장 전경.png'

    const date = new Date(page.created_time).toLocaleDateString('ko-KR', {
      year: 'numeric', month: 'numeric', day: 'numeric',
    })

    // 블록 가져오기
    const blocksRes = await fetch(`https://api.notion.com/v1/blocks/${id}/children?page_size=100`, {
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28',
      },
    })
    const blocksData: any = await blocksRes.json()

    const blocks = (blocksData.results || []).map((block: any) => {
      const type = block.type
      if (type === 'paragraph') {
        const text = block.paragraph?.rich_text?.map((t: any) => t.plain_text).join('') || ''
        return { type: 'paragraph', text }
      }
      if (type === 'image') {
        const url = block.image?.file?.url || block.image?.external?.url || ''
        return { type: 'image', url }
      }
      if (type === 'callout') {
        const text = block.callout?.rich_text?.map((t: any) => t.plain_text).join('') || ''
        return { type: 'callout', text }
      }
      if (type === 'divider') {
        return { type: 'divider' }
      }
      if (['heading_1', 'heading_2', 'heading_3'].includes(type)) {
        const text = block[type]?.rich_text?.map((t: any) => t.plain_text).join('') || ''
        return { type: 'heading', text }
      }
      return null
    }).filter(Boolean)

    res.status(200).json({ id, title, summary, date, tag: tagFormatted, imageUrl, blocks })
  } catch (err) {
    res.status(500).json({ error: String(err) })
  }
}

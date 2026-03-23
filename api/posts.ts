import type { VercelRequest, VercelResponse } from '@vercel/node'

const NOTION_API_KEY = process.env.VITE_NOTION_API_KEY
const DB_ID = process.env.VITE_NOTION_CONTENT_DB_ID || '32a6e0a30d66813b8f7decb3aa457f60'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')

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

    const posts = data.results.map((page: any) => {
      const props = page.properties
      const title = props['제목']?.title?.[0]?.plain_text || ''
      const summary = props['요약']?.rich_text?.[0]?.plain_text || ''
      const tag = props['태그']?.multi_select?.[0]?.name || ''
      const dateStr = props['날짜']?.date?.start || page.created_time
      const imageUrl = props['커버이미지']?.files?.[0]?.file?.url || props['커버이미지']?.files?.[0]?.external?.url || ''
      const videoUrl = props['영상URL']?.url || ''

      const date = new Date(dateStr).toLocaleDateString('ko-KR', {
        year: 'numeric', month: 'numeric', day: 'numeric',
      })

      const slug = page.id

      return {
        id: page.id,
        slug,
        title,
        summary,
        date,
        tag: tag.startsWith('#') ? tag : `#${tag}`,
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

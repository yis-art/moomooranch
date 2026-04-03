// @ts-nocheck
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DATABASE_ID = '32a6e0a30d66813b8f7decb3aa457f60';

module.exports = async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');

    try {
        const response = await notion.databases.query({
            database_id: DATABASE_ID,
            filter: { property: '상태', select: { equals: '발행완료' } },
            sorts: [{ property: '발행순서', direction: 'ascending' }],
        });

        const posts = response.results.map((page) => {
            const props = page.properties;
            return {
                id: page.id,
                title: props['제목']?.title?.[0]?.plain_text || '',
                summary: props['요약']?.rich_text?.[0]?.plain_text || '',
                content: props['짧은글']?.rich_text?.[0]?.plain_text || '',
                videoUrl: props['영상URL']?.url || null,
                tags: (props['태그']?.multi_select || []).map((t) => t.name),
                order: props['발행순서']?.number || 0,
                createdAt: page.created_time,
            };
        });

        res.status(200).json({ posts });
    } catch (error) {
        console.error('Notion API Error:', error);
        res.status(500).json({ error: error.message });
    }
};

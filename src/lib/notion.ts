import { Client } from '@notionhq/client';

const notion = new Client({
  auth: import.meta.env.VITE_NOTION_API_KEY,
});

const CONTENT_DB_ID = import.meta.env.VITE_NOTION_CONTENT_DB_ID || '32a6e0a30d66813b8f7decb3aa457f60';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  date: string;
  tag: string;
  imageUrl?: string;
  hasVideo?: boolean;
  videoUrl?: string;
  content?: string;
  status: string;
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await notion.databases.query({
      database_id: CONTENT_DB_ID,
      filter: {
        property: '상태',
        select: {
          equals: '발행완료',
        },
      },
      sorts: [
        {
          property: '발행순서',
          direction: 'ascending',
        },
      ],
    });

    return response.results.map((page: any) => {
      const props = page.properties;

      const title = props['제목']?.title?.[0]?.plain_text || '';
      const summary = props['요약']?.rich_text?.[0]?.plain_text || '';
      const tag = props['태그']?.multi_select?.[0]?.name || '';
      const imageUrl = props['커버이미지']?.files?.[0]?.file?.url ||
                       props['커버이미지']?.files?.[0]?.external?.url || '';
      const videoUrl = props['영상URL']?.url || '';
      const dateStr = props['날짜']?.date?.start || page.created_time;
      const status = props['상태']?.select?.name || '';

      // slug: 제목에서 생성 or 별도 속성
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9가-힣\s]/g, '')
        .replace(/\s+/g, '-')
        .slice(0, 50);

      const date = new Date(dateStr).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });

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
        status,
      };
    });
  } catch (error) {
    console.error('Notion fetch error:', error);
    return [];
  }
}

export async function fetchBlogPost(pageId: string): Promise<BlogPost | null> {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId }) as any;
    const blocks = await notion.blocks.children.list({ block_id: pageId });

    const props = page.properties;
    const title = props['제목']?.title?.[0]?.plain_text || '';
    const summary = props['요약']?.rich_text?.[0]?.plain_text || '';
    const tag = props['태그']?.multi_select?.[0]?.name || '';
    const imageUrl = props['커버이미지']?.files?.[0]?.file?.url || '';
    const videoUrl = props['영상URL']?.url || '';
    const dateStr = props['날짜']?.date?.start || page.created_time;
    const status = props['상태']?.select?.name || '';

    // 블록 텍스트 추출
    const content = blocks.results
      .map((block: any) => {
        const type = block.type;
        const richText = block[type]?.rich_text || [];
        return richText.map((t: any) => t.plain_text).join('');
      })
      .filter(Boolean)
      .join('\n\n');

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9가-힣\s]/g, '')
      .replace(/\s+/g, '-')
      .slice(0, 50);

    const date = new Date(dateStr).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

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
      content,
      status,
    };
  } catch (error) {
    console.error('Notion fetch error:', error);
    return null;
  }
}

// Notion API는 브라우저에서 CORS 제한으로 직접 호출 불가
// Vercel Serverless Function /api/posts 를 통해 호출

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
    const response = await fetch('/api/posts');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('fetchBlogPosts error:', error);
    return [];
  }
}

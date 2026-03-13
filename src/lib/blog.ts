import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  lang: string;
  content: string;
}

const contentDir = path.join(process.cwd(), 'content', 'blog');

export function getBlogPosts(lang: 'en' | 'es' | 'pt'): BlogPost[] {
  const dir = path.join(contentDir, lang);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));

  const posts: BlogPost[] = files.map((filename) => {
    const filePath = path.join(dir, filename);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    const slug = filename.replace(/\.mdx$/, '');
    return {
      slug: (data.slug as string) || slug,
      title: data.title as string,
      date: data.date as string,
      description: data.description as string,
      category: data.category as string,
      lang: data.lang as string,
      content,
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string, lang: 'en' | 'es' | 'pt'): BlogPost | null {
  const dir = path.join(contentDir, lang);
  const filePath = path.join(dir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug: (data.slug as string) || slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
    category: data.category as string,
    lang: data.lang as string,
    content,
  };
}

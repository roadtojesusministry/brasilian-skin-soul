import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skin Care Journal | Brasilian Skin Soul',
  description:
    'Expert skin care tips, treatment guides, and local insights from Claudia Pieri at Brasilian Skin Soul in Woodland Hills, CA.',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  const posts = getBlogPosts('en');

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FAF8F2' }}>
      {/* Hero */}
      <section
        className="pt-32 pb-16 px-6"
        style={{ backgroundColor: '#1B4D2E' }}
      >
        <div className="max-w-4xl mx-auto flex items-start justify-between gap-6 flex-wrap">
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: '#C9A96E' }}
            >
              Brasilian Skin Soul
            </p>
            <h1
              className="text-4xl md:text-5xl font-serif mb-4"
              style={{ color: '#FAF8F2', fontFamily: 'Georgia, serif' }}
            >
              Skin Care Journal
            </h1>
            <p className="text-lg max-w-xl" style={{ color: '#a8c5b5' }}>
              Expert tips, treatment guides, and local insights — written for
              skin that deserves real attention.
            </p>
          </div>
          {/* Language switcher */}
          <div className="flex items-center gap-2 mt-2">
            <span
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{ backgroundColor: '#C9A96E', color: '#1B4D2E' }}
            >
              🇺🇸 English
            </span>
            <Link
              href="/es/blog"
              className="px-4 py-2 rounded-full text-sm font-medium border transition-colors hover:bg-white/10"
              style={{ borderColor: '#C9A96E', color: '#C9A96E' }}
            >
              🇪🇸 Español
            </Link>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl overflow-hidden border flex flex-col"
              style={{ borderColor: '#e8e0d0', backgroundColor: '#fff' }}
            >
              <div className="p-6 flex flex-col flex-1">
                {/* Category badge */}
                <span
                  className="inline-block text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full mb-4 self-start"
                  style={{ backgroundColor: '#1B4D2E20', color: '#1B4D2E' }}
                >
                  {post.category}
                </span>
                <h2
                  className="text-xl font-serif font-semibold mb-3 leading-snug"
                  style={{
                    fontFamily: 'Georgia, serif',
                    color: '#1B4D2E',
                  }}
                >
                  {post.title}
                </h2>
                <p
                  className="text-sm leading-relaxed mb-4 flex-1"
                  style={{ color: '#666' }}
                >
                  {post.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: '#e8e0d0' }}>
                  <time className="text-xs" style={{ color: '#999' }}>
                    {formatDate(post.date)}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium transition-colors hover:opacity-80"
                    style={{ color: '#C9A96E' }}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

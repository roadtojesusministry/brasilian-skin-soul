import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diário de Cuidados com a Pele | Brasilian Skin Soul',
  description:
    'Dicas especializadas de cuidados com a pele, guias de tratamentos e informações locais de Claudia Pieri na Brasilian Skin Soul, Woodland Hills, CA.',
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function PtBlogPage() {
  const posts = getBlogPosts('pt');

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FAF8F2' }}>
      {/* Hero */}
      <section
        className="pt-32 pb-16 px-6"
        style={{ backgroundColor: '#1B4D2E' }}
      >
        <div className="max-w-4xl mx-auto flex items-start justify-between gap-6 flex-wrap">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-3 hover:opacity-80 transition-opacity"
              style={{ color: '#C9A96E' }}
            >
              ← Brasilian Skin Soul
            </Link>
            <h1
              className="text-4xl md:text-5xl font-serif mb-4"
              style={{ color: '#FAF8F2', fontFamily: 'Georgia, serif' }}
            >
              Diário de Cuidados
            </h1>
            <p className="text-lg max-w-xl" style={{ color: '#a8c5b5' }}>
              Dicas especializadas, guias de tratamentos e informações locais —
              escritos para uma pele que merece atenção de verdade.
            </p>
          </div>
          {/* Language switcher */}
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full text-sm font-medium border transition-colors hover:bg-white/10"
              style={{ borderColor: '#C9A96E', color: '#C9A96E' }}
            >
              🇺🇸 English →
            </Link>
            <Link
              href="/es/blog"
              className="px-4 py-2 rounded-full text-sm font-medium border transition-colors hover:bg-white/10"
              style={{ borderColor: '#C9A96E', color: '#C9A96E' }}
            >
              🇪🇸 Español →
            </Link>
            <span
              className="px-4 py-2 rounded-full text-sm font-medium"
              style={{ backgroundColor: '#C9A96E', color: '#1B4D2E' }}
            >
              🇧🇷 Português
            </span>
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
                  style={{ fontFamily: 'Georgia, serif', color: '#1B4D2E' }}
                >
                  {post.title}
                </h2>
                <p
                  className="text-sm leading-relaxed mb-4 flex-1"
                  style={{ color: '#666' }}
                >
                  {post.description}
                </p>
                <div
                  className="flex items-center justify-between mt-auto pt-4 border-t"
                  style={{ borderColor: '#e8e0d0' }}
                >
                  <time className="text-xs" style={{ color: '#999' }}>
                    {formatDate(post.date)}
                  </time>
                  <Link
                    href={`/pt/blog/${post.slug}`}
                    className="text-sm font-medium transition-colors hover:opacity-80"
                    style={{ color: '#C9A96E' }}
                  >
                    Leia mais →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Back to top */}
        <div className="text-center mt-12">
          <Link
            href="#"
            className="text-sm transition-opacity hover:opacity-70"
            style={{ color: '#1B4D2E' }}
          >
            Voltar ao início ↑
          </Link>
        </div>
      </section>
    </main>
  );
}

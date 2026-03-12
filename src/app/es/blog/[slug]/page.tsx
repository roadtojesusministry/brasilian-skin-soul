import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPost, getBlogPosts } from '@/lib/blog';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts('es');
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug, 'es');
  if (!post) return {};
  return {
    title: `${post.title} | Brasilian Skin Soul`,
    description: post.description,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function EsBlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug, 'es');
  if (!post) notFound();

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FAF8F2' }}>
      {/* Header bar */}
      <div style={{ backgroundColor: '#1B4D2E' }} className="pt-20 pb-10 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/es/blog"
            className="text-sm mb-6 inline-block transition-opacity hover:opacity-70"
            style={{ color: '#C9A96E' }}
          >
            ← Volver al Diario
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full"
              style={{ backgroundColor: '#C9A96E20', color: '#C9A96E' }}
            >
              {post.category}
            </span>
            <time className="text-xs" style={{ color: '#a8c5b5' }}>
              {formatDate(post.date)}
            </time>
          </div>
          <h1
            className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-4"
            style={{ fontFamily: 'Georgia, serif', color: '#FAF8F2' }}
          >
            {post.title}
          </h1>
          {/* Language switcher */}
          <Link
            href={`/blog/${post.slug}`}
            className="inline-block text-sm px-4 py-2 rounded-full border transition-colors hover:bg-white/10"
            style={{ borderColor: '#C9A96E', color: '#C9A96E' }}
          >
            🇺🇸 View in English →
          </Link>
        </div>
      </div>

      {/* Article content */}
      <article className="max-w-3xl mx-auto px-6 py-12">
        <div
          className="prose prose-lg max-w-none"
          style={
            {
              '--tw-prose-headings': '#1B4D2E',
              '--tw-prose-body': '#333',
              '--tw-prose-links': '#42825e',
            } as React.CSSProperties
          }
        >
          <MDXRemote source={post.content} />
        </div>

        {/* CTA */}
        <div
          className="mt-16 rounded-2xl p-8 text-center"
          style={{ backgroundColor: '#1B4D2E' }}
        >
          <p
            className="text-lg font-serif mb-2"
            style={{ fontFamily: 'Georgia, serif', color: '#FAF8F2' }}
          >
            ¿Lista para transformar tu piel?
          </p>
          <p className="text-sm mb-6" style={{ color: '#a8c5b5' }}>
            Reserva tu tratamiento personalizado con Claudia Pieri en Brasilian Skin Soul.
          </p>
          <Link
            href="/booking"
            className="inline-block px-8 py-3 rounded-full font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#C9A96E', color: '#1B4D2E' }}
          >
            Reserva Tu Tratamiento →
          </Link>
        </div>
      </article>
    </main>
  );
}

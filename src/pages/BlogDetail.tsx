import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import SEO from '../components/SEO'

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>()
  const post = blogPosts.find(p => p.id === id)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#070B14]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 dark:text-cyan-400 hover:underline font-semibold">← Back to Blog</Link>
        </div>
      </div>
    )
  }

  const related = blogPosts.filter(p => p.id !== post.id).slice(0, 3)

  return (
    <div className="bg-white dark:bg-[#070B14] min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.id}`}
      />

      {/* Hero */}
      <div className={`bg-gradient-to-br ${post.color} text-white py-16`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="text-white/80 hover:text-white text-sm mb-6 inline-flex items-center gap-1 font-semibold">
            ← All Posts
          </Link>
          <div className="mt-4">
            <span className="text-xs font-bold tracking-widest uppercase bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold mt-4 mb-3 leading-tight tracking-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
              <span className="font-semibold text-white">{post.author}</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          {/* Main content */}
          <article className="space-y-6">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg"
              >
                {paragraph}
              </p>
            ))}

            {/* Tags */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-3">Tags:</span>
              <div className="inline-flex flex-wrap gap-2 mt-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">Related Articles</h3>
              <div className="space-y-4">
                {related.map(r => (
                  <Link
                    key={r.id}
                    to={`/blog/${r.id}`}
                    className="block group"
                  >
                    <div className="text-xs font-semibold text-blue-600 dark:text-cyan-400 mb-1">{r.category}</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {r.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

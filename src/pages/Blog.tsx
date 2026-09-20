import { useState } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import SEO from '../components/SEO'

const categories = ['All', ...Array.from(new Set(blogPosts.map(p => p.category)))]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter(p => p.category === activeCategory)

  return (
    <div className="bg-white dark:bg-[#070B14] min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <SEO
        title="Blog"
        description="Insights, tutorials, and tech articles from Aksha Globals — covering Android, iOS, Generative AI, Prompt Engineering, and career growth."
        path="/blog"
      />

      {/* Hero */}
      <div className="bg-slate-900 dark:bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400 dark:text-cyan-400 mb-2 inline-block">Engineering Journal</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Insights &amp; Blog</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Tutorials, technical deep-dives, and career advice from the Aksha Globals engineering team.
          </p>
        </div>
      </div>

      {/* Category filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(article => (
            <Link
              key={article.id}
              to={`/blog/${article.id}`}
              className="group bg-white dark:bg-slate-900/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Colored header banner */}
              <div className={`bg-gradient-to-br ${article.color} px-6 py-7 text-white`}>
                <span className="text-xs font-semibold tracking-widest uppercase bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-0.5 rounded-full">
                  {article.category}
                </span>
                <div className="text-5xl mt-4 mb-1 drop-shadow">{article.icon}</div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5 flex-1">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full px-2.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-300">{article.author}</span>
                  <div className="flex items-center gap-2">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

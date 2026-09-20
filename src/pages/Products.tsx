import { Link } from 'react-router-dom'
import { products } from '../data/products'
import SEO from '../components/SEO'

export default function Products() {
  const productsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Aksha Globals Mobile Applications',
    'description': 'Suite of purpose-built Android and iOS mobile applications for spirituality, spam call security, mindful meditation, aesthetic widgets, and driver safety.',
    'itemListElement': products.map((product, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'SoftwareApplication',
        'name': product.name,
        'headline': product.tagline,
        'description': product.description,
        'applicationCategory': product.category,
        'operatingSystem': 'Android, iOS',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        },
        'url': `https://akshaglobals.com/#/products/${product.id}`
      }
    }))
  }

  return (
    <div className="bg-white dark:bg-[#070B14] min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <SEO
        title="Mobile Apps Catalog – Android & iOS Solutions"
        description="Discover Aksha Globals' suite of high-performance mobile apps: Om SaiBaba prayers, CallSecure dialer, Resona meditation soundscapes, and DriveShield safety."
        path="/products"
        type="website"
        keywords={[
          'Aksha Globals products',
          'Om SaiBaba devotional app',
          'CallSecure robocall blocker',
          'Resona meditation soundscape',
          'Floral Clock Widget',
          'DriveShield driving assistant',
          'Android utility apps',
          'iOS lifestyle applications'
        ]}
        schema={productsSchema}
      />
      {/* Hero */}
      <div className="bg-slate-900 dark:bg-slate-950 text-white py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400 dark:text-cyan-400 mb-2 inline-block">Portfolio & Products</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Our Products</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Discover our suite of high-impact mobile and web applications built with precision architecture to solve real-world problems.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group bg-white dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-blue-400 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 dark:hover:shadow-cyan-950/20 hover:-translate-y-1 flex flex-col"
            >
              <div className={`bg-gradient-to-br ${product.color} p-6 sm:p-8 flex items-center justify-center h-48 sm:h-44`}>
                {product.icon && product.icon.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i) ? (
                  <img src={product.icon} alt={product.name} className="w-full h-full object-contain" />
                ) : (
                  <span className="text-6xl sm:text-6xl">{product.icon || ''}</span>
                )}
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {product.name}
                    </h2>
                    <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-full px-2.5 py-0.5 border border-slate-200 dark:border-slate-700">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-cyan-400 text-sm font-semibold mb-2">{product.tagline}</p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3">{product.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-blue-600 dark:text-cyan-400 text-sm font-bold group-hover:translate-x-0.5 transition-transform duration-200">
                  <span>View Details</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

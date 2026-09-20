import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import SEO from '../components/SEO'

const PlayStoreIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.199a1 1 0 0 1 0 1.717L15.396 14.7 12.79 12l2.608-2.701 2.3 1.409zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z"/>
  </svg>
)

const AppStoreIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
)

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#070B14]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Product Not Found</h1>
          <Link to="/products" className="text-blue-600 dark:text-cyan-400 font-semibold hover:underline">← Back to Products</Link>
        </div>
      </div>
    )
  }

  const ratingSpec = product.specs.find(s => s.label.toLowerCase().includes('rating'))?.value || '4.8 ★'
  const platformSpec = product.specs.find(s => s.label.toLowerCase().includes('platform'))?.value || 'Android & iOS'

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': product.name,
    'headline': product.tagline,
    'description': product.description,
    'applicationCategory': `${product.category}Application`,
    'operatingSystem': platformSpec,
    'image': product.icon,
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock'
    },
    'featureList': product.features,
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': ratingSpec.includes('4.') ? '4.8' : '4.7',
      'bestRating': '5',
      'ratingCount': '10000'
    },
    'author': {
      '@type': 'Organization',
      'name': 'Aksha Globals',
      'url': 'https://akshaglobals.com'
    }
  }

  const metaDescription = `${product.name}: ${product.tagline}. Download on ${platformSpec} with ${product.features[0] || 'modern UI and privacy'}.`

  return (
    <div className="bg-white dark:bg-[#070B14] min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <SEO
        title={`${product.name} – ${product.tagline}`}
        description={metaDescription}
        path={`/products/${product.id}`}
        image={product.icon}
        type="product"
        keywords={[
          product.name,
          `${product.name} app`,
          product.category,
          'Aksha Globals',
          ...product.features.map(f => f.split(' ').slice(0, 3).join(' '))
        ]}
        schema={productSchema}
      />
      {/* Hero */}
      <div className={`bg-gradient-to-br ${product.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/products" className="text-white/80 hover:text-white text-sm mb-6 inline-flex items-center gap-1 font-semibold">
            ← All Products
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
            {product.icon && product.icon.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i) ? (
              <img src={product.icon} alt={product.name} className="w-24 h-24 md:w-32 md:h-32 object-contain bg-white/10 rounded-2xl p-2 backdrop-blur-sm shadow-xl" />
            ) : (
              <div className="text-6xl md:text-8xl">{product.icon || ''}</div>
            )}
            <div>
              <span className="text-white/80 text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">{product.category}</span>
              <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-2 tracking-tight">{product.name}</h1>
              <p className="text-xl text-white/90">{product.tagline}</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={product.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900/90 text-white rounded-full hover:bg-slate-900 transition-colors text-sm font-semibold shadow-md"
                >
                  <PlayStoreIcon />
                  Get on Google Play
                </a>
                <a
                  href={product.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/20 text-white rounded-full hover:bg-white/30 backdrop-blur-sm transition-colors text-sm font-semibold shadow-md"
                >
                  <AppStoreIcon />
                  Download on App Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">About {product.name}</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl">
                    <span className="text-blue-600 dark:text-cyan-400 font-bold mt-0.5">✓</span>
                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specs Sidebar */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Specifications</h2>
            <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full">
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-slate-900/40' : 'bg-slate-50 dark:bg-slate-800/40'}>
                      <td className="px-4 py-3 text-sm font-medium text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800">{spec.label}</td>
                      <td className="px-4 py-3 text-sm font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href={product.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-4 py-3 bg-blue-600 dark:bg-cyan-500 hover:bg-blue-700 dark:hover:bg-cyan-400 text-white dark:text-slate-950 rounded-full transition-all font-semibold shadow-sm"
              >
                <PlayStoreIcon />
                Google Play Store
              </a>
              <a
                href={product.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-4 py-3 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white rounded-full transition-all font-semibold shadow-sm border border-slate-700"
              >
                <AppStoreIcon />
                Apple App Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

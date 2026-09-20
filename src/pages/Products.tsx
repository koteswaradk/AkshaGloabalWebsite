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
    <div className="bg-m3-surface dark:bg-m3-dark-surface min-h-screen">
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
      <div className="bg-gradient-to-br from-m3-primary-10 to-m3-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-m3-primary-container text-lg max-w-2xl mx-auto">
            Discover our suite of powerful mobile and web applications built to solve real-world problems.
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
              className="group bg-m3-surface-container-lowest dark:bg-m3-dark-surface-container-high rounded-m3-xl shadow-m3-1 overflow-hidden hover:shadow-m3-3 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className={`bg-gradient-to-br ${product.color} p-6 sm:p-8 flex items-center justify-center h-48 sm:h-40`}>
                {product.icon && product.icon.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i) ? (
                  <img src={product.icon} alt={product.name} className="w-full h-full object-contain" />
                ) : (
                  <span className="text-6xl sm:text-6xl">{product.icon || ''}</span>
                )}
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-xl font-bold text-m3-on-surface dark:text-m3-dark-on-surface">{product.name}</h2>
                    <span className="text-xs bg-m3-surface-container-high dark:bg-m3-dark-surface-container-highest text-m3-on-surface-variant rounded-full px-2 py-0.5">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-m3-primary dark:text-m3-dark-primary text-sm font-medium mb-2">{product.tagline}</p>
                  <p className="text-m3-on-surface-variant dark:text-m3-dark-on-surface-variant text-sm line-clamp-3">{product.description}</p>
                </div>
                <div className="mt-4 flex items-center text-m3-primary dark:text-m3-dark-primary text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                  View Details →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import HomeClassic from './pages/HomeClassic'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Training from './pages/Training'
import TrainingDetail from './pages/TrainingDetail'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import Studio from './pages/Studio'
import KmpStudio from './pages/KmpStudio'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

function AppLayout() {
  const location = useLocation()
  const isStudio = location.pathname === '/studio'

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classic" element={<HomeClassic />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/training" element={<Training />} />
          <Route path="/training/:id" element={<TrainingDetail />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/kmp" element={<KmpStudio />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>
      {!isStudio && <Footer />}
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppLayout />
      </Router>
    </ThemeProvider>
  )
}


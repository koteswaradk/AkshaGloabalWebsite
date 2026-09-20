import { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Logo = () => {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#1a6a7a"/>
        <circle cx="20" cy="20" r="18" fill="none" stroke="#4DB8D6" strokeWidth="1.5"/>
        <text x="20" y="27" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" fontFamily="serif">A</text>
      </svg>
    )
  }

  return (
    <img
      src="https://github.com/user-attachments/assets/a3566f73-012a-405e-a33f-dd12f0982201"
      alt="Aksha Globals Logo"
      width="40"
      height="40"
      className="rounded-full object-cover"
      onError={() => setImgError(true)}
    />
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isStudio = location.pathname === '/studio'
  const isKmp = location.pathname === '/kmp'

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/training', label: 'Training' },
    { to: '/blog', label: 'Blog' },
    { to: '/kmp', label: 'KMP App', badge: 'Kotlin' },
  ]

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 inline-flex items-center gap-1.5 ${
      isActive
        ? 'text-white bg-blue-600 dark:bg-cyan-500 dark:text-slate-950 shadow-sm shadow-blue-500/20'
        : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
    }`

  return (
    <nav className="bg-white/95 dark:bg-[#0b1120]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-sm sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <Logo />
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              Aksha<span className="text-blue-600 dark:text-cyan-400"> Globals{isStudio ? ' Studios' : isKmp ? ' KMP' : ''}</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1.5">
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 dark:bg-cyan-950/80 dark:text-cyan-400 border border-blue-200 dark:border-cyan-800/60">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}

            {/* Theme Toggle Button */}
            <div className="ml-2 pl-2 border-l border-slate-200 dark:border-slate-800">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu and toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Open menu"
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0b1120] border-t border-slate-200 dark:border-slate-800 px-4 py-3 flex flex-col gap-1 shadow-lg transition-colors">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'text-white bg-blue-600 dark:bg-cyan-500 dark:text-slate-950'
                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`
              }
              end={link.to === '/'}
              onClick={() => setMenuOpen(false)}
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 dark:bg-cyan-950 dark:text-cyan-400 border border-blue-200 dark:border-cyan-800">
                  {link.badge}
                </span>
              )}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

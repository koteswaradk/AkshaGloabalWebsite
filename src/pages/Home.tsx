import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import HeroSlider from '../components/HeroSlider'
import { products } from '../data/products'
import { courses } from '../data/courses'
import {
  Globe2,
  Cpu,
  ArrowRight,
  Smartphone,
  GraduationCap,
  CheckCircle2,
  Star,
  Users,
  ChevronRight,
  BookOpen,
} from 'lucide-react'

export default function Home() {
  const [selectedTech, setSelectedTech] = useState<'kmp' | 'genai' | 'mobile'>('kmp')

  const stats = [
    { label: 'Active Users Served', value: '150K+', detail: 'Global consumer & enterprise footprint' },
    { label: 'Production Apps', value: '6+', detail: 'High-availability iOS & Android solutions' },
    { label: 'Engineers Upskilled', value: '15,000+', detail: 'In KMP, Jetpack Compose, iOS & GenAI' },
    { label: 'Global Satisfaction', value: '4.8 ★', detail: 'Consistent excellence & learner ratings' },
  ]

  const technologies = [
    {
      id: 'kmp' as const,
      title: 'Kotlin Multiplatform (KMP & CMP)',
      badge: 'Flagship Specialization',
      tagline: 'Single Codebase. 100% Native Execution for iOS, Android & Desktop.',
      description:
        'Aksha Globals pioneers modern cross-platform engineering with Kotlin Multiplatform. Share 85%+ business logic and modern UI with Compose Multiplatform without compromising on 60fps native performance.',
      metrics: ['Up to 60% faster time-to-market', '100% native runtime performance', 'Unified domain & data architecture'],
      cta: 'Explore KMP Capabilities',
      link: '/kmp',
    },
    {
      id: 'genai' as const,
      title: 'Generative AI & Intelligent Systems',
      badge: 'Next-Gen Engineering',
      tagline: 'Practical AI integration for consumer and corporate systems.',
      description:
        'From embedded intelligent spam detection and call classification to automated content synthesis, we engineer secure, latency-optimized on-device and cloud LLM integrations.',
      metrics: ['Context-aware intelligence', 'Strict privacy-first on-device processing', 'Adaptive prompt pipelines'],
      cta: 'View AI Training & Products',
      link: '/products',
    },
    {
      id: 'mobile' as const,
      title: 'Enterprise Native Mobile',
      badge: 'Native Reliability',
      tagline: 'Crafted with Jetpack Compose & SwiftUI.',
      description:
        'Engineered to meet rigorous standards of security, battery efficiency, and offline resilience. Every application is designed with modern Material 3 and Apple Human Interface guidelines.',
      metrics: ['Zero-crash architecture standards', 'Material 3 design system precision', 'Enterprise telematics & security'],
      cta: 'Browse App Portfolio',
      link: '/products',
    },
  ]

  const activeTech = technologies.find(t => t.id === selectedTech)!

  return (
    <div className="bg-white dark:bg-[#070B14] text-slate-800 dark:text-slate-100 min-h-screen selection:bg-blue-100 dark:selection:bg-cyan-900 selection:text-blue-900 dark:selection:text-cyan-200 transition-colors duration-200">
      <SEO
        title="Aksha Globals — International Software Engineering & Technology Academy"
        description="Aksha Globals is an international technology consultancy specializing in Kotlin Multiplatform (KMP), AI-driven consumer apps, and elite developer engineering programs."
        path="/"
      />

      {/* Global Hero Presentation — Retaining Full Hero Slider */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Global Operations Live Bar */}
        <div className="relative z-10 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md px-4 py-2.5 text-xs text-slate-300">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-white">Global Operations</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300 hidden sm:inline">Delivering KMP, Compose & Enterprise AI Software</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <Link to="/products" className="hover:text-blue-400 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 font-medium">
                View Enterprise Products <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Retained Core Slider */}
        <div className="relative">
          <HeroSlider />
        </div>
      </section>

      {/* Strategic Metrics Ribbon */}
      <section className="relative z-20 border-b border-slate-200/90 dark:border-slate-800 bg-slate-50/80 dark:bg-[#0a0f1d] backdrop-blur-sm py-9 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="border-l-2 border-blue-600/70 dark:border-cyan-400 pl-4 sm:pl-6">
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-blue-700 dark:text-cyan-400 mt-1">{stat.label}</div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Solutions & Products Bento Showcase */}
      <section className="py-20 bg-white dark:bg-[#070b14] relative transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-blue-50 text-blue-700 dark:bg-cyan-950/80 dark:text-cyan-400 border border-blue-200/80 dark:border-cyan-800/40 mb-4">
              <Smartphone className="w-3.5 h-3.5" />
              Product Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight">
              Production Software Engineered for Scale, Speed & Elegance
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              We design and ship high-impact digital applications across consumer utilities, intelligent communication security, devotional multimedia, and connected telematics.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.slice(0, 3).map((prod) => (
              <div
                key={prod.id}
                className="group relative rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-cyan-500/50 p-7 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 dark:hover:shadow-cyan-950/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3.5">
                      <img
                        src={prod.icon}
                        alt={prod.name}
                        className="w-13 h-13 rounded-2xl object-cover border border-slate-200 dark:border-slate-700 shadow-sm"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                        }}
                      />
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                          {prod.name}
                        </h3>
                        <span className="text-xs font-semibold text-blue-600 dark:text-cyan-400">{prod.category}</span>
                      </div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200 dark:border-slate-700">
                      Live
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {prod.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {prod.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                        <span className="truncate font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                    {prod.specs.find(s => s.label === 'Downloads')?.value || '50K+'} Downloads
                  </div>
                  <Link
                    to={`/products/${prod.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-cyan-400 hover:text-blue-800 dark:hover:text-cyan-300 transition-colors"
                  >
                    View Specs <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-blue-400 dark:hover:border-cyan-400 transition-all shadow-sm"
            >
              Explore Full Product Suite ({products.length} Applications) <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* The KMP & Technological Advantage */}
      <section className="py-20 bg-slate-50 dark:bg-[#0a0f1d] border-t border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              Core Competency
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Pioneering Modern Cross-Platform Architecture
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Explore our core technical specializations driving faster delivery and uncompromised user experiences.
            </p>

            {/* Selector Pills */}
            <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              {technologies.map(t => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTech(t.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedTech === t.id
                      ? 'bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 shadow-md shadow-blue-500/20 dark:shadow-cyan-500/20'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {t.title.split('(')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tech Feature Card */}
          <div className="rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 p-8 sm:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold tracking-wider uppercase text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-cyan-950/80 px-3 py-1 rounded-full border border-blue-200/60 dark:border-cyan-800/40 inline-block mb-3">
                  {activeTech.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white mb-3 leading-snug">
                  {activeTech.tagline}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {activeTech.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {activeTech.metrics.map((m, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                      <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">{m}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to={activeTech.link}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 hover:bg-blue-700 dark:hover:bg-cyan-400 transition-all shadow-md shadow-blue-600/25 dark:shadow-cyan-500/25"
                >
                  {activeTech.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Code Paradigm Box */}
              <div className="lg:col-span-5 bg-slate-900 dark:bg-slate-950 rounded-2xl p-6 border border-slate-800 font-mono text-xs text-slate-200 shadow-xl">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  </span>
                  <span className="text-slate-400 font-sans text-xs">AkshaArchitecture.kt</span>
                </div>
                <div className="text-cyan-400">// Unified Multiplatform Architecture</div>
                <div className="mt-2">
                  <span className="text-purple-400">expect</span> <span className="text-blue-400">class</span> <span className="text-amber-300">DeviceSecurityEngine</span>() &#123;
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-purple-400">fun</span> evaluateCallRisk(phone: String): RiskScore
                </div>
                <div className="pl-4 text-slate-300">
                  <span className="text-purple-400">suspend fun</span> syncTelemetry(): Flow&lt;State&gt;
                </div>
                <div>&#125;</div>
                <div className="mt-3 text-slate-400">
                  <span className="text-cyan-400">// Shared 100% between iOS & Android</span>
                  <br />
                  <span className="text-purple-400">val</span> sharedEngine = AkshaEngine.create()
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Developer & Corporate Training Academy */}
      <section className="py-20 bg-white dark:bg-[#070b14] relative transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-50 dark:bg-amber-950/80 text-amber-800 dark:text-amber-400 border border-amber-200 dark:border-amber-800/40 mb-3">
                <GraduationCap className="w-3.5 h-3.5" />
                Training & Talent Academy
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                Empowering Over 15,000 Engineers Worldwide
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
                Curated by industry tech leads. Master production-grade Kotlin Multiplatform, modern Android with Compose, iOS with SwiftUI, and enterprise Prompt Engineering.
              </p>
            </div>
            <Link
              to="/training"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-blue-400 dark:hover:border-cyan-400 transition-all shrink-0 self-start md:self-auto shadow-sm"
            >
              Browse All Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {courses.slice(0, 3).map((course) => (
              <div
                key={course.id}
                className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-7 flex flex-col justify-between hover:border-blue-400 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{course.icon}</span>
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800/60">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      {course.rating}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{course.name}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{course.tagline}</p>

                  <div className="flex items-center gap-4 text-xs font-medium text-slate-700 dark:text-slate-300 mb-6 py-3 border-y border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                      {course.students} Learners
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      {course.levels.length} Levels
                    </div>
                  </div>
                </div>

                <Link
                  to={`/training/${course.id}`}
                  className="w-full py-3 px-4 rounded-xl text-center text-xs font-bold bg-slate-900 dark:bg-cyan-500 hover:bg-blue-600 dark:hover:bg-cyan-400 text-white dark:text-slate-950 transition-colors shadow-sm"
                >
                  View Syllabus & Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Action Banner */}
      <section className="py-20 bg-slate-900 dark:bg-[#080d19] border-t border-slate-800 text-white relative transition-colors duration-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 dark:bg-cyan-500/20 text-blue-300 dark:text-cyan-300 border border-blue-400/30 dark:border-cyan-400/30 mb-4">
            <Globe2 className="w-3.5 h-3.5" />
            Global Engagement
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Build Your Next High-Performance Product?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you need custom mobile development, architectural guidance in Kotlin Multiplatform, or specialized developer training, our team delivers global excellence.
          </p>

          <div className="mt-9 flex flex-wrap justify-center items-center gap-4">
            <Link
              to="/products"
              className="px-8 py-3.5 rounded-full text-sm font-bold bg-blue-600 dark:bg-cyan-500 text-white dark:text-slate-950 hover:bg-blue-500 dark:hover:bg-cyan-400 transition-all shadow-xl shadow-blue-600/30 dark:shadow-cyan-500/30 cursor-pointer"
            >
              Explore Enterprise Products
            </Link>
            <Link
              to="/kmp"
              className="px-8 py-3.5 rounded-full text-sm font-bold bg-slate-800 text-slate-100 border border-slate-700 hover:bg-slate-700 transition-all cursor-pointer"
            >
              Experience Interactive KMP Studio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

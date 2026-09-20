/* Added download buttons for brochure and syllabus next to Register button */
import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { courses } from '../data/courses'
import type { CourseLevel } from '../data/courses'
import PaymentModal from '../components/PaymentModal'
import SEO from '../components/SEO'

const courseIcons: Record<string, React.ReactNode> = {
  'android-dev': (
    <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
    </svg>
  ),
  'ios-dev': (
    <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  ),
  'genai-ml': (
    <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v13" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 8.5c1.5 0 3.5 1 3.5 3.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 8.5c-1.5 0-3.5 1-3.5 3.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 13c2 1 4 1 6 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 13c-2 1-4 1-6 0" />
    </svg>
  ),
  'prompt-engineering': (
    <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  'kmp-dev': (
    <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 2v20h4v-8l8 8h5L13 14l8-10h-5L8 12V2H4z" />
    </svg>
  ),
  'cmp-dev': (
    <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12a3 3 0 013 3v2a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 13h12a3 3 0 013 3v2a3 3 0 01-3 3H6a3 3 0 01-3-3v-2a3 3 0 013-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 17h8" />
    </svg>
  ),
}

export default function TrainingDetail() {
  const { id } = useParams<{ id: string }>()
  const course = courses.find(c => c.id === id)
  const [activeLevel, setActiveLevel] = useState<string>('Basic')
  const [paymentOpen, setPaymentOpen] = useState(false)
  const [selectedLevel, setSelectedLevel] = useState<CourseLevel | null>(null)

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#070B14]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Course Not Found</h1>
          <Link to="/training" className="text-blue-600 dark:text-cyan-400 font-semibold hover:underline">← Back to Training</Link>
        </div>
      </div>
    )
  }

  const currentLevel = course.levels.find(l => l.name === activeLevel)!

  const handleRegister = (level: CourseLevel) => {
    setSelectedLevel(level)
    setPaymentOpen(true)
  }

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': course.name,
    'headline': course.tagline,
    'description': course.description,
    'provider': {
      '@type': 'Organization',
      'name': 'Aksha Globals',
      'url': 'https://akshaglobals.com'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': course.rating.toString(),
      'bestRating': '5',
      'ratingCount': course.students.replace(/[^0-9]/g, '') || '100'
    },
    'hasCourseInstance': course.levels.map(level => ({
      '@type': 'CourseInstance',
      'name': `${course.name} (${level.name} Level)`,
      'courseMode': 'Online and In-Person',
      'duration': level.duration,
      'offers': {
        '@type': 'Offer',
        'price': level.price.toString(),
        'priceCurrency': 'INR',
        'availability': 'https://schema.org/InStock'
      }
    }))
  }

  const courseMetaDescription = `Master ${course.name} at Aksha Globals: ${course.tagline}. Hands-on live curriculum spanning Basic to Expert tiers with industry certification.`

  return (
    <div className="bg-white dark:bg-[#070B14] min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <SEO
        title={`${course.name} Course – Curriculum, Fees & Certification`}
        description={courseMetaDescription}
        path={`/training/${course.id}`}
        type="course"
        keywords={[
          course.name,
          `${course.name} syllabus`,
          `${course.name} certification`,
          'Aksha Globals',
          ...course.levels.map(l => `${course.name} ${l.name}`)
        ]}
        schema={courseSchema}
      />
      {/* Hero */}
      <div className={`bg-gradient-to-br ${course.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/training" className="text-white/80 hover:text-white text-sm mb-6 inline-flex items-center gap-1 font-semibold">
            ← All Courses
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
            <div className="text-6xl md:text-8xl">{courseIcons[course.id] || <span>{course.icon}</span>}</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">{course.name}</h1>
              <p className="text-xl text-white/90">{course.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Description */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Course Overview</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg max-w-3xl">{course.description}</p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <div className="text-xs uppercase font-bold tracking-wide text-slate-500 dark:text-slate-400">Students enrolled</div>
            <div className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">{course.students}</div>
          </div>
          <div className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <div className="text-xs uppercase font-bold tracking-wide text-slate-500 dark:text-slate-400">Course rating</div>
            <div className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">{course.rating}/5</div>
          </div>
          <div className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <div className="text-xs uppercase font-bold tracking-wide text-slate-500 dark:text-slate-400">Lead instructor</div>
            <div className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">{course.instructor}</div>
          </div>
          <div className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <div className="text-xs uppercase font-bold tracking-wide text-slate-500 dark:text-slate-400">Curriculum tiers</div>
            <div className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white">{course.levels.length} Levels</div>
          </div>
        </div>

        {/* Level Tabs */}
        <div className="mb-8">
          <div className="flex border-b border-slate-200 dark:border-slate-800 gap-2">
            {course.levels.map(level => (
              <button
                key={level.name}
                onClick={() => setActiveLevel(level.name)}
                className={`pb-3 px-5 text-sm font-bold border-b-2 transition-all cursor-pointer ${
                  activeLevel === level.name
                    ? 'border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {level.name} Level
              </button>
            ))}
          </div>
        </div>

        {/* Active Level Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {currentLevel.name} Level Curriculum
              </h3>
              <ul className="space-y-3">
                {currentLevel.curriculum.map((topic, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm">
                    <span className="text-blue-600 dark:text-cyan-400 font-bold mt-0.5">✓</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 shadow-sm sticky top-24">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">Pricing &amp; Enrollment</span>
              <div className="mt-2 text-3xl font-extrabold text-blue-600 dark:text-cyan-400">
                ₹{currentLevel.price.toLocaleString()}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Duration: {currentLevel.duration}</div>

              <div className="mt-6 space-y-3">
                <button
                  onClick={() => handleRegister(currentLevel)}
                  className="w-full py-3.5 rounded-xl bg-blue-600 dark:bg-cyan-500 hover:bg-blue-700 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-bold text-sm transition-all shadow-md shadow-blue-500/20 dark:shadow-cyan-500/20 cursor-pointer"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedLevel && (
        <PaymentModal
          isOpen={paymentOpen}
          courseName={course.name}
          level={selectedLevel.name}
          price={selectedLevel.price}
          onClose={() => setPaymentOpen(false)}
        />
      )}
    </div>
  )
}

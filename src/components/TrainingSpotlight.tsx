import { Link } from 'react-router-dom'
import type { Course } from '../data/courses'

interface TrainingSpotlightProps {
  course: Course
  title?: string
}

export default function TrainingSpotlight({ course, title = 'Selected Training' }: TrainingSpotlightProps) {
  return (
    <div className="mt-12 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <div className="flex-1">
          <span className="inline-flex rounded-full bg-blue-50 dark:bg-cyan-950/80 border border-blue-200 dark:border-cyan-800/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-cyan-400">
            {title}
          </span>
          <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {course.name}
          </h3>
          <p className="mt-2 text-base font-semibold text-blue-600 dark:text-cyan-400">
            {course.tagline}
          </p>
          <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {course.description}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 p-4">
              <div className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Students</div>
              <div className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white">{course.students}</div>
            </div>
            <div className="rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 p-4">
              <div className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Rating</div>
              <div className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white">{course.rating}/5</div>
            </div>
            <div className="rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 p-4">
              <div className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">Instructor</div>
              <div className="mt-1 text-lg font-extrabold text-slate-900 dark:text-white">{course.instructor}</div>
            </div>
          </div>
        </div>

        <div className="w-full lg:max-w-md">
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 p-5 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Learning path</h4>
            <div className="mt-4 space-y-3">
              {course.levels.map(level => (
                <div
                  key={level.name}
                  className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">{level.name}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{level.duration}</div>
                    </div>
                    <div className="text-sm font-bold text-blue-600 dark:text-cyan-400">
                      ₹{level.price.toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to={`/training/${course.id}`}
              className="mt-5 flex items-center justify-center w-full py-3 rounded-xl bg-blue-600 dark:bg-cyan-500 hover:bg-blue-700 dark:hover:bg-cyan-400 text-white dark:text-slate-950 text-sm font-bold transition-colors shadow-sm"
            >
              Enroll In Masterclass
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

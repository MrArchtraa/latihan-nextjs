import React from 'react'

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-50 disabled:pointer-events-none">
      {children}
    </button>
  )
}

export const OutlinedButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-sky-600 text-sky-600 hover:border-sky-600 hover:bg-sky-100 hover:text-sky-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-sky-500 dark:hover:border-sky-600">
      {children}
    </button>
  )
}

export const GhostButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-sky-600 hover:bg-sky-100 hover:text-sky-800 disabled:opacity-50 disabled:pointer-events-none dark:text-sky-500 dark:hover:bg-sky-800/30 dark:hover:text-sky-400">
      {children}
    </button>
  )
}

export const SoftButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-sky-100 text-sky-800 hover:bg-sky-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-sky-900 dark:text-sky-400">
      {children}
    </button>
  )
}
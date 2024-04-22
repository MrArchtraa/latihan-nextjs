import React from 'react'

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
      {children}
    </button>
  )
}

export default Button
import React from 'react'

const OutlinedCancelButton = ({children}: {children: React.ReactNode}) => {
  return (
    <button className=' rounded-md border-2 text-red-600 hover:text-white border-red-600 hover:bg-red-600 px-6 py-2'>
        {children}
    </button>
  )
}

export default OutlinedCancelButton
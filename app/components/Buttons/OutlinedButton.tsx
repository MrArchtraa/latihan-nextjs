import React from 'react'

const OutlinedButton = ({children}: {children: React.ReactNode}) => {
  return (
    <button className=' rounded-md text-sky-600 border-2 border-sky-500 hover:text-white hover:bg-sky-500 px-6 py-2'>
        {children}
    </button>
  )
}

export default OutlinedButton
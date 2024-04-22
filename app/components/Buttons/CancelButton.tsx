import React from 'react'

const CancelButton = ({children}: {children: React.ReactNode}) => {
  return (
    <button className=' rounded-md text-white bg-red-600 hover:bg-red-700 px-6 py-2'>
        {children}
    </button>
  )
}

export default CancelButton
import React from 'react'

const Button = ({children}: {children: React.ReactNode}) => {
  return (
    <button className=' rounded-md text-white bg-sky-500 hover:bg-sky-600 px-6 py-2'>
        {children}
    </button>
  )
}

export default Button
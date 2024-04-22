import React from 'react'

const CardHeader = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='mb-3 pb-3 border-b'>
        {children}
    </div>
  )
}

export default CardHeader
import React from 'react'

const Card = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
        {children}
    </div>
  )
}

export default Card
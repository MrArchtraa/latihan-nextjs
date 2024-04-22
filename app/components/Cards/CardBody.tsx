import React from 'react'

const CardBody = ({children}: {children: React.ReactNode}) => {
    return (
      <div className='mb-3'>
          {children}
      </div>
    )
}

export default CardBody
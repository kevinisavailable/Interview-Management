import React from 'react'

const Card = ({children}) => {
  return (
    <div className='border rounded overflow-hidden shadow p-3 mb-5 bg-white rounded'>
        {children}
    </div>
  )
}

export default Card
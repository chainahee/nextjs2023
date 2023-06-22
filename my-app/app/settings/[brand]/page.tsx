
import React from 'react'

function Brand({params}) {
  console.log(params)
  return (
    <div>
      <h1 className='text-pink-500 text-xl'>{params.brand}</h1>
      <div className="">
        
      </div>
    </div>
  )
}

export default Brand
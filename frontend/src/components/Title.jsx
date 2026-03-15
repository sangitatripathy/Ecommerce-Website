import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex items-center gap-2 mb-3 font-medium'>
      <p className='text-gray-500'>{text1}<span className=' ml-2 text-gray-700'>{text2}</span></p>
      <p className='w-8 bg-[#414141] h-0.5'></p>
    </div>
  )
}

export default Title
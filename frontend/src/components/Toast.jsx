import React from 'react'

const Toast = ({message,show}) => {
  if (!show) return null

  return (
    <div className='fixed top-20 right-5 bg-white-300 text-black px-4 py-3 rounded shadow-lg animate-slide-in z-50'>
      {message}
      <div className='absolute bottom-0 left-0 h-1 bg-red-500 animate-toast'></div>
    </div>
  );
}

export default Toast
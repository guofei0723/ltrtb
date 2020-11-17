import React from 'react'
import reactLogo from './react-logo.svg'

export default () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-teal-800'>
      <h1 className='mx-auto mb-4 bg-gray-500 px-8 py-4 text-2xl hover:text-gray-600'>Hello World!</h1>
      <img src={reactLogo} alt='react-logo' className='w-16 h-16' />
      <p className='text-gray-200'>Edit src/App.tsx</p>
    </div>
  )
}

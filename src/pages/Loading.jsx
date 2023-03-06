import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <div className='bg-black h-screen flex w-screen items-center justify-center scale-50'>
        <div className='w-60 h-60 bg-black relative '>
            <div className='w-16 bg-green-800 h-32 absolute right-10 top-10 overscroll-none	 '>
            <div className='first-rect bg-green-800 '></div>
            <div className='second-rect bg-green-800 '></div>
            <div className='third-rect bg-green-800 '></div>

            </div>
        </div>
    </div>
  )
}

export default Loading
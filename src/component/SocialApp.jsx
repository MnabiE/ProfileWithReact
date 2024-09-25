import React from 'react'

export const SocialApp = ({className}) => {
  return (
    <div className='my-5'>
        <a className='text-gray-500 border-gray-500 flex p-5 justify-center items-center hover:text-white hover:bg-gray-500 w-3 h-3 border text-xl rounded-full' href=""><i className={`${className} pt-[2px]`}></i></a>
    </div>
  )
}

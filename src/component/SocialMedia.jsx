import React from 'react'
import { SocialApp } from './SocialApp'

export const SocialMedia = () => {
    return (
        <div className='flex flex-col items-center space-y-4'>
            <h1 className='text-gray-500 font-semibold'>Get Connected</h1>
            <div className='flex gap-5'>
                <SocialApp className={"fa-brands fa-facebook-f"} />
                <SocialApp className={"fa-brands fa-twitter"} />
                <SocialApp className={"fa-brands fa-google"} />
                <SocialApp className={"fa-brands fa-instagram"} />
            </div>
        </div>
    )
}

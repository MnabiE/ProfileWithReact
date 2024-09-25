import photo from '../assets/photo.jpg'
import { Button } from './Button'
import { IconText } from './IconText'
import { SocialMedia } from './SocialMedia'
export default function Pic() {
    return (
        <>
            <div className='space-y-6'>
                <div className='text-center flex flex-col items-center'>
                    <img className='w-36 rounded-full px-5 shadow-gray-500 ease-in-out shadow-xl hover:transform hover:scale-[125%]' src={photo} alt="" />
                    <h1 className='text-3xl m-3 font-bold'>Mohammad Nabi</h1>
                    <IconText icon={"fa-solid fa-location-dot"} text={"15 Eagle Way, AL10 8RD"} classname={"text-xl text-gray-400"} />
                </div>
                <p className='text-xl leading-relaxed text-center text-gray-500'>Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Doloremque atque, sunt voluptatem labo? Accusantium, a omnis!</p>
            </div>
            <div className='flex justify-between my-10 mx-3'>
                <div>
                    <h2 className='uppercase text-gray-500 '>membership</h2>
                    <IconText classname={"text-orange-300 hover:cursor-pointer font-bold"} icon={"fa-solid fa-star"} text={"Gold Member"} />
                </div>
                <Button name={"Renew"} className={"text-green-500 rounded-md border border-green-500 border-solid py-1 px-4 font-semibold hover:bg-gray-500 hover:text-white hover:border-gray-500"} />
            </div>
            <div>
                <SocialMedia />
            </div>
        </>
    )
}
import React from 'react'

export const TextButton = () => {
    return (

            <div className='flex justify-between my-10 mx-3'>
                <div>
                    <h2 className='uppercase text-gray-500 '>membership</h2>
                    <IconText classname={"text-orange-500 font-bold"} icon={"fa-solid fa-star"} text={"Gold Member"} />
                </div>
                <Button name={"Renew"} className={"text-green-500 border border-green-500 border-solid py-1 px-4 font-semibold hover:bg-gray-500 hover:text-white hover:border-gray-500"} />
            </div>
    )
}

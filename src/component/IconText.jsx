import React from 'react'

export const IconText = ({icon, text, classname}) => {
  return (
    <div>
        <span className={classname} ><i className={`mr-2 ${icon}`}></i>{text}</span>
    </div>
  )
}
// 15 Eagle Way, AL10 8RD
// fa-solid fa-location-dot
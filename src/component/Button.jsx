import React from 'react'

export const Button = ({name, className}) => {
  return (
    <div>
        <button className={className}>{name}</button>
    </div>
  )
}

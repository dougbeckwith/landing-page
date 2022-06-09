import React from 'react'

const Button = ({text}) => {
  return (
    <button className='xl:w-[500px] px-6 py-2.5 rounded-md bg-[#118c4f] text-white'>
      {text}
    </button>
  )
}

export default Button

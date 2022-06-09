import React from 'react'

const Input = ({placeholder, type}) => {
  return (
    <input
      className='xl:w-[500px] px-6 py-2.5 rounded-md border border-[#118c4f] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
      type={type}
      placeholder={placeholder}
    />
  )
}

export default Input

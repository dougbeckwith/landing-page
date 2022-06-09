import React from 'react'
import trade from '../assets/trade.png'
import Button from './shared/Button'
import Input from './shared/Input'

const Signup = () => {
  return (
    <div className='w-full bg-white py-[100px]'>
      <div className='container m-auto flex flex-col px-5 lg:flex-row justify-between'>
        <div className='w-full lg:w-2/5 2xl:w-[700px]'>
          <h1 className='text-4xl md:text-5xl font-bold py-5'>
            Earn passive income with crypto.
          </h1>
          <p>
            Earn up to 12% annual rewards on 30+ digital assets. Simply hold
            your assets in the app to automatically earn rewards at the end of
            each month with no lockups and no limits.
          </p>
          <div className='flex flex-col gap-2 pt-4'>
            <Input type={'text'} placeholder={'Enter your email'} />
            <Button text='Learn More' />
          </div>
        </div>
        <div className='flex justify-center w-full lg:w-2/5 2xl:w-[700px] pt-10 lg:pt-0'>
          <img className='w-[300px]' src={trade} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Signup

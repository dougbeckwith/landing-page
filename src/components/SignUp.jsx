import React from 'react'
import labtop from '../assets/hero-img.png'
import Button from './shared/Button'
import Input from './shared/Input'

const SignUp = () => {
  return (
    <div
      name='home'
      className='w-full py-[80px] lg:py-[110px] bg-white text-lg'>
      <div className='container m-auto flex flex-col px-5 lg:flex-row lg:justify-between'>
        <div className='lg:w-2/5 2xl:w-[700px] w-full'>
          <p>Buy & sell Crypto 24/7 using your registered accounts</p>
          <p className='text-3xl sm:text-4xl md:text-5xl font-bold py-3'>
            Invest in Cryptocurreny with Your TFSA
          </p>
          <p className='pb-4'>
            Buy, sell, and store hundreds of cryptocurrencies
          </p>
          <div className='flex flex-col gap-2'>
            <Input type={'text'} placeholder={'Enter your email'} />
            <Input type={'password'} placeholder={'Enter your password'} />
            <Button text='Sign Up' />
          </div>
        </div>
        <div className='lg:w-2/5 w-full flex justify-center mt-20 lg:mt-0'>
          <img
            className='w-[400px] lg:w-auto lg:max-w-[500px] self-center'
            src={labtop}
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default SignUp

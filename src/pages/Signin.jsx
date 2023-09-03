import React from 'react'
import Banner1 from "/Images/Banner1.png"
import BtonGoogle from '../components/BtonGoogle'

export default function Signin() {
  return (
    <nav className='flex '>
      <div className=' bg-slate-100 relative '>
      </div>
      <div className=' bg-white w-[420px] h-[700px] z-10 mt-24 ml-5 xl:bg-opacity-70 xl:ml-[35%] xl:w-[30%]'>
        <div className='justify-items-centerer items-center relative lg:ml-2'>
          <h1 className='font-sans text-5xl text-black text-center mt-14 lg:mt-14 '>Connect!</h1>
          <h2 className=' text-black text-center mt-1 text-lg font-medium'>Enjoy all our products</h2>
          <div className='mt-12'>
            <h3 className=' text-black ml-8 font-medium' >Email</h3>
            <input className='w-[85%] ml-8 h-12  bg-slate-300 rounded-md ' />
            <h3 className=' text-black ml-8  mt-10 font-medium'>Password</h3>
            <input className='w-[85%] ml-8 h-12 bg-slate-300 rounded-md' />
          </div>
          <div className='mt-9'>
            <input className=' bg-orange-600 bg-current rounded-full w-[60%] h-12 ml-[20%] text-black font-bold  lg:ml-[20%]'
            type='button' 
            value='Sign in'/>
            < BtonGoogle/>
            <h2 className=' text-center mt-10 ml-1 '>Don't have an account yet? Register here!!</h2>
            <input className=' rounded-md bg-slate-400 mt-2 ml-16 w-[70%] h-12'
            type='button'
            value='Create an account'/>
          </div>
        </div>
      </div>
      <img className='hidden sm:block xl:w-[100%] xl:absolute xl:h-[100%] xl:bg-cover'
          src={Banner1}></img>
    </nav>
  )
}

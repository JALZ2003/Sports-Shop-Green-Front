import React from 'react'
import img from '../../public/images/logoMarca.png'
import arrow from '../../public/images/arrow.png'

export default function Signup() {
  return (
    <div className='w-screen m-0 z-40'>
      <section className='flex  w-screen  h-screen justify-center'>
        <img src={arrow} alt="" className='absolute left-4 top-16 w-8 h-4 ' />
        <div className='w-1/2 h-screen   object-cover bg-blue-300 hidden md:flex md:items-center'><img src={img} alt="marca" /></div>

        <div className='bg-[#EDAF92] h-full w-full md:w-1/2  flex flex-col  justify-center items-center'>
          <h1 className='font-semibold md:-mt-64 lg:mt-20'>CREATE AN ACCOUNT!</h1>
          <form className='mt-12 flex flex-col items-center justify-center h-80 '>

            <div className='flex flex-row '>
              <div className='flex flex-col justify-between w-40 mr-2'>
                <label className='font-light text-sm ' htmlFor="Name">First Name</label>
                <input type="text" className='rounded-lg mb-7 font-thin px-2 hover:border-2 border-orange-300 focus:border-black-400 active:bg-black-600  h-8' />
                <label className='font-light text-sm' htmlFor="Name">Password</label>
                <input type="text" className='rounded-lg font-thin px-2 hover:border-2 border-orange-300 focus:border-black-400 active:bg-black-600  h-8' />
              </div>

              <div className='flex  flex-col justify-between w-40 ml-2'>
                <label className='font-light text-sm' htmlFor="Name">Last Name</label>
                <input type="text" className='rounded-lg mb-7 font-thin px-2 hover:border-2 border-orange-300 focus:border-black-400 active:bg-black-600  h-8' />
                <label className='font-light text-sm' htmlFor="Name">Confirme Password</label>
                <input type="text" className='rounded-lg font-thin px-2 hover:border-2 border-orange-300 focus:border-black-400 active:bg-black-600  h-8' />
              </div>
            </div>

            <div className='flex  flex-col justify-between w-40 ml-2 mt-8'>

              <label className='font-light text-sm' htmlFor="Name">Confirme Password</label>
              <input type="text" className='rounded-lg font-thin px-2 hover:border-2 border-orange-300 focus:border-black-400 active:bg-black-600  h-8' />

            </div>
            <label className='font-light text-[12px] w-3/4' htmlFor="Name"> <input type="checkbox" className='rounded-lg font-thin px-2 hover:border-2 border-black focus:border-black-400 active:bg-black-600  h-8' />I declare that I have read and authorize the use of my personal data according to the Authorization and accept the Terms and Conditions of Mometum X.</label>
<input type="buttom" placeholder='REGISTER' className='bg-[#EC6B2F] hover:border-4 border-black'/>
          </form>
        </div>
      </section>

    </div>
  )
}
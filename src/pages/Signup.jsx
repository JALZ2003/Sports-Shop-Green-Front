import React from 'react'
import img from '../../public/images/logoMarca.png'
import logo from '../../public/images/logo.png'

export default function Signup() {
  return (
    <div className='w-full m-0 z-40'>
      <section className='flex flex-row w-screen h-screen justify-center'>
        <img className='w-1/2 mt-8 object-cover bg-blue-300' src={img} alt="marca" />
        <div className='bg-[#EDAF92] w-1/2 '>
          <h1 className='mt-36 flex font-semibold justify-center'>CREATE AN ACCOUNT!</h1>
          <form className='mt-12 flex flex-col justify-around px-12   h-32'>
           <div className='flex justify-between'>
            <label htmlFor="Name">Name</label> <input type="text" placeholder='Name' className='rounded-lg font-thin px-2 hover:border-2 border-black focus:border-black-400 active:bg-black-600'/>
            <input type="text" placeholder='Name' className='rounded-lg font-thin'/>
            </div> 
            <div className=' flex justify-between '> 
            <input type="text" placeholder='Name' className='rounded-lg font-thin' />
            <input type="text" placeholder='Name' className='rounded-lg font-thin'/>
              </div> 

          </form>
        </div>
      </section>

    </div>
  )
}
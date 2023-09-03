import React from 'react'
import img from '../../public/images/logoMarca.png'
import arrow from '../../public/images/arrow.png'
import { Link as Anchor, useNavigate } from 'react-router-dom'
import { useRef } from 'react'



export default function Signup() {
  const navigate = useNavigate()
  const name = useRef()
  const lastName = useRef()
  const email =useRef()
  const password = useRef()
  const confirmePassword = useRef()
  const authorize =useRef()

  const signUp_data = () =>{
    let data ={
      name: name.current.value,
      lastName: name.current.value,
      password: name.current.value,
      confirmePassword: name.current.value
    }
    console.log(data)
  }
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
                <input type="text" ref={name} className='rounded-lg mb-7 font-thin px-2 hover:border-2 border-orange-300 focus:border-black-400 active:bg-black-600  h-8' />

                <label className='font-light text-sm' htmlFor="email">Email</label>
                <input type="text" ref={email} className='rounded-lg font-thin px-2 hover:border-2 border-orange-300 focus:border-black-400 active:bg-black-600  h-8' />
              </div>

              <div className='flex  flex-col justify-between w-40 ml-2'>
                <label className='font-light text-sm' htmlFor="last name">Last Name</label>
                <input type="text" ref={lastName} className='rounded-lg mb-7 font-thin px-2 hover:border-2 border-orange-300 focus:border-black-400 active:bg-black-600  h-8' />

                <label className='font-light text-sm' htmlFor="password">Password</label>
                <input type="text" ref={password} className='rounded-lg font-thin px-2 hover:border-2 border-orange-300 focus:border-black-400 active:bg-black-600  h-8' />
              </div>
            </div>

            <div className='flex  flex-col justify-between w-40 ml-2 mt-8'>

              <label className='font-light text-sm' htmlFor="confirme pasword">Confirme Password</label>
              <input type="text" ref={confirmePassword} className='rounded-lg font-thin px-2 hover:border-2 border-orange-300 focus:border-black-400 active:bg-black-600  h-8' />

            </div>
            <label ref={authorize} className='font-light text-[10px] m-2 flex w-5/6 mt-4 ' htmlFor="authorize"> <input type="checkbox" className='  h-8 m-2' />I declare that I have read and authorize the use of my personal data according to Terms and Conditions of Mometum X.</label>
            <input type="buttom" onClick={signUp_data} placeholder='REGISTER' className='bg-[#EC6B2F] rounded-lg  flex mt-4 hover:border-2 border-orange-500 text-center placeholder-white' />
            <h3 className='font-thin mt-6'>Already have an account? {" "} <Anchor href='/signin' >Signin</Anchor></h3>
          </form>
        </div>
      </section>

    </div>
            
  )
}
import img from '/Images/FondoH.jpeg'
import arrow from '/Images/Arrow.png'
import { Link as Anchor, useNavigate } from 'react-router-dom'
import { useRef } from 'react'

export default function Signup() {
  const navigate = useNavigate()
  const name = useRef()
  const lastName = useRef()
  const email = useRef()
  const password = useRef()
  const confirmePassword = useRef()
  const authorize = useRef()

  const signUp_data = () => {
    let data = {
      name: name.current.value,
      lastName: name.current.value,
      password: name.current.value,
      confirmePassword: name.current.value
    }
    console.log(data)
  }
  return (
    <div className='flex w-full h-screen justify-center'>
      <Anchor to={'/'}><img src={arrow} alt="" className='absolute left-10 top-10 w-8 h-4' /></Anchor>
      <div className='bg-[#EDAF92] h-full w-full flex flex-col justify-center items-start md:pl-[15%] md:py-20 bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${img})` }}>
        <form className='flex flex-col items-center justify-center w-full md:w-[65%] lg:w-[45%] h-full py-8 bg-black bg-opacity-30 md:rounded-2xl text-white' >
          <h1 className='font-semibold py-5 text-lg'>CREATE AN ACCOUNT!</h1>
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
          <label ref={authorize} className='font-light text-[10px] m-2 flex w-3/4 mt-4 items-center justify-center' htmlFor="authorize">
            <input type="checkbox" className='h-8 m-2' />
            <p>I declare that I have read and authorize the use of my personal data according to Terms and Conditions of Mometum X.</p>
          </label>
          <input type="buttom" onClick={signUp_data} placeholder='REGISTER' className='bg-[#EC6B2F] rounded-lg p-2 flex mt-4 hover:border-2 border-orange-500 text-center placeholder-white' />
          <h3 className='font-thin mt-6'>Already have an account? {" "} <Anchor to={'/signin'} className='font-bold'>Signin!</Anchor></h3>
        </form>

      </div>
    </div>
  )
}
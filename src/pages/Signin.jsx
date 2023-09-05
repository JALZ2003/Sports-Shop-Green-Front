import Google from "/Images/Google.png"
import img from '/Images/FondoM.jpeg'
import arrow from '/Images/Arrow.png'
import { Link as Anchor } from 'react-router-dom'

export default function Signin() {
  return (

    <div className='flex w-full h-screen justify-center'>
      <Anchor to={'/'}><img src={arrow} alt="" className='absolute left-10 top-10 w-8 h-4' /></Anchor>
      <div className='bg-[#EDAF92] h-full w-full flex flex-col justify-center items-end md:pr-[10%] md:py-20 bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${img})` }}>
        <form className='flex flex-col items-center justify-center w-full md:w-[65%] lg:w-[45%] h-full py-8 bg-white bg-opacity-20 md:bg-opacity-40 md:rounded-2xl text-white' >
          <h1 className='font-semibold text-lg py-5'>CONNECT!</h1>
          <h2 className='text-center font-semibold'>Enjoy all our products</h2>
          <div className='flex flex-col py-5 w-full items-center'>
            <div className='flex flex-col w-[50%]'>
              <label className='font-light text-sm'>Email</label>
              <input type="text" className='rounded-lg mb-7 font-thin px-2 hover:border-2 focus:border-black-400 active:bg-black-600 h-8' />
              <label className='font-light text-sm'>Password</label>
              <input type="text" className='rounded-lg font-thin px-2 hover:border-2 focus:border-black-400 active:bg-black-600 h-8' />
            </div>

            <div className='mt-5 flex flex-col items-center'>
            <input type="buttom"  placeholder='SIGN IN' className='bg-[#EC6B2F] rounded-lg py-2 w-[70%] flex mt-4 hover:border-2 border-orange-500 text-center placeholder-white' />

            {/* < BtonGoogle/> */}
            <button className="flex bg-white text-black py-2 w-[70%] rounded-lg justify-center mt-5"><span className="pr-2"><img className='w-6 bg-white' src={Google} /></span> Google </button>
            <h2 className=' text-center mt-10 ml-1 '>Don't have an account yet? <Anchor to="/signup" className='font-bold'>Register here!</Anchor></h2>
            
          </div>
          </div>

        </form>

      </div>
    </div>
    // <nav className='flex '>
    //   <div className=' bg-slate-100 relative '>
    //   </div>
    //   <div className=' bg-white w-[420px] h-[700px] z-10 mt-24 ml-5 xl:bg-opacity-70 xl:ml-[35%] xl:w-[30%]'>

    //   </div>
    //   <img className='hidden sm:block xl:w-[100%] xl:absolute xl:h-[100%] xl:bg-cover'
    //       src={Banner1}></img>
    // </nav>
  )
}

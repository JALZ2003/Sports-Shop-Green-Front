import arrow from '/Images/Arrow.png'
import { Link as Anchor, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import axios from 'axios'
import apiUrl from '../../apiUrl.js'
import Swal from "sweetalert2"
import seller from '/Images/seller.jpg'

export default function beSalesman() {

const beSeller = () => {
    let data = {
      company : company.current.value,
      country : country.current.value,
      city : city.current.value
    }
    console.log(data)
    axios.post(apiUrl + '/creators', data)
      .then((res) => Swal.fire({
        icon: 'success',
        text: 'Seller created!'

      }, setTimeout(() => navigate('/signin'), 2000)))
      .catch(err => Swal.fire({
        icon: 'error',
        text: 'sign in please!',
        html: err.response.data.messages.map(each => `<p>${each}</p>`).join('')
      }))  

    return (
        <div className='flex w-full min-h-screen justify-center'>
          <Anchor to={'/'}><img src={arrow} alt="" className='absolute left-10 top-10 w-8 h-4' /></Anchor>
          <div className='min-h-full w-full flex flex-col justify-center items-start md:pl-[15%] md:py-20 bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${seller})` }}>
            <form className='flex flex-col items-center justify-center w-full md:w-[65%] lg:w-[45%] min-h-full py-8 bg-black bg-opacity-30 md:rounded-2xl text-white' >
              <h1 className='font-semibold py-5 text-lg'>CREATE AN ACCOUNT!</h1>
              <div className='flex flex-row '>
                <div className='flex flex-col justify-between w-40 mr-2'>
                  <label className='font-light text-sm ' htmlFor="Name">Company</label>
                  <input type="text" ref={company} className='rounded-lg mb-7 font-thin px-2 text-black focus:border-black-400 active:bg-black-600  h-8' />
                  <label className='font-light text-sm' htmlFor="email">Country</label>
                  <input type="text" ref={country} className='rounded-lg font-thin px-2 text-black focus:border-black-400 active:bg-black-600  h-8' />
                  <label className='font-light text-sm' htmlFor="last name">City</label>
                  <input type="text" ref={city} className='rounded-lg mb-7 font-thin px-2 text-black focus:border-black-400 active:bg-black-600  h-8' />
                </div>
              </div>
            </form>
    
            <button type="buttom" onClick={beSeller} className='bg-[#EC6B2F]  rounded-lg px-4 py-2 flex mt-4 hover:border-2 border-orange-500 text-center ' >SELL WITH US</button>
          </div>
        </div>
      )
    }
}

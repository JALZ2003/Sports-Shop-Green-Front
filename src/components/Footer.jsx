import logo2 from "/Images/logo2.png"
import instagram from "/Images/instagram.png"
import facebook from "/Images/facebook.png"
import youtube from "/Images/youtube.png"
import payment from "/Images/payment.png"

export default function Footer() {
    return (
        <footer className=" mt-[500px] justify-between w-full h-[500px] md:flex-row flex-col-reverse flex">
        
          <div className="md:w-5/12 w-full text-white bg-[#03224B] flex flex-col items-center justify-around ">
            <img className="mt-5" src={logo2} alt='logo' />
            <p className="text-xl">Ignite Your Momentum, Elevate Your Sports!</p>
            <p>Copyright</p>
          </div>
          <div className="md:w-5/12 w-full bg-white flex flex-col h-full">
            <div className="w-full h-[50vh] flex flex-col items-center justify-center">
                <p className="pt-4 text-2xl">Payment Methods</p>
                <img src={payment} alt="" />
            </div>

            <div class="border border-solid border-gray-400"></div>

            <div className="w-full h-[50vh] mt-7 flex justify-around">
                <div>
                    <p className="text-xl">Products</p>
                    <p>Accesories</p>
                    <p>Sportswear</p>
                    <p>Sports shoes</p>
                    <p>Sports backpacks</p>
                    <p>Sports Equipment</p>
                </div>
                <div>
                    <p className="text-xl">Company Information</p>
                    <p>About Us</p>
                    <p>Mission & Vision</p>
                </div>

            </div>
          </div>
          <div className="md:w-1/12 w-full bg-[#03224B] h-96 md:h-full flex md:flex-col justify-around items-center">
           <img src={instagram} className="w-[50px]" alt="" />
           <img src={facebook} className="w-[50px]" alt="" />
           <img src={youtube} className="w-[50px]" alt="" />
          </div>
        
      </footer>

    )
}

{/* <footer className='flex flex-col w-4/5 mx-auto mt-10 justify-center items-center pt-10'>
<hr className="w-4/5 mx-auto text-[#222222] border-[#2B3D51] opacity-30"></hr>
<img className="mt-5" src={Logo} alt='logo' />
<h1>hola</h1>
</footer> */}
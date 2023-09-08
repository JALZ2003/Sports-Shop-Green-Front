import logo from "/Images/LogoCorto.png"

export default function Panel() {
  return (
    <div className='flex w-full h-screen'>
      <div className='lg:w-[600px]'></div>
      <div className='w-full flex flex-col items-center pt-[180px] lg:pt-[80px]'>
        <h1 className='text-[40px] font-bold'>Panel</h1>
        <div className='py-5 xl:py-10 grid grid-cols-1 xl:grid-cols-3 w-full md:w-[65%] justify-items-center gap-7'>
          <div className='rounded-full w-[200px] h-[200px] bg-slate-200 p-2 flex flex-col justify-center items-center'>
            <h1 className='font-bold text-[30px]'>Users</h1>
            <p className='text-[24px]'>50</p>
          </div>
          <div className='rounded-full w-[200px] h-[200px] bg-yellow-200 p-2 flex flex-col justify-center items-center'>
            <h1 className='font-bold text-[30px]'>Products</h1>
            <p className='text-[24px]'>2500</p>
          </div>
          <div className='rounded-full w-[200px] h-[200px] bg-green-200 p-2 flex flex-col justify-center items-center'>
            <h1 className='font-bold text-[30px]'>Categories</h1>
            <p className='text-[24px]'>8</p>
          </div>
        </div>
        <img className='w-[320px] h-[180px]' src={logo}></img>
      </div>
    </div>
  )
}

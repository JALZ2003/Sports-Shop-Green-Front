import Google from "/Images/Google.png"

export default function BtonGoogle() {
    
    return(
        <>
        <input className=' bg-sky-700 rounded-md w-[85%]  h-16 mt-14 ml-8 text-white text-ml-2'
        type='button' 
        value='Sign in with Google'/>
        <img 
        className='relative ml-20 -mt-14 w-12 bg-white'
        src={Google}></img>
         </>
    )
}
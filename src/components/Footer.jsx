import Logo from "/Images/Logo.png"

export default function Footer() {
    return (
        <footer className='flex flex-col w-4/5 mx-auto mt-10 justify-center items-center pt-10'>
            <hr className="w-4/5 mx-auto text-[#222222] border-[#2B3D51] opacity-30"></hr>
            <img className="mt-5" src={Logo} alt='logo' />
        </footer>

    )
}

import { useState } from "react";
import Logo from "/Images/Logo.png"
import Display from './Display';

export default function Navbar() {

    const [show, setShow] = useState(false)
    //const [options, setOptions] = useState([]);

    const options = [
        { to: '/', title: "Home" },
        { to: '/signin', title: "Signin" },
        { to: '/signup', title: "Signup" },
    ]

    return (
        <>
            {show && <Display options={options} show={show} setShow={setShow} />}
            <nav className="flex justify-between w-full absolute top-0 z-20">
                <svg onClick={() => setShow(!show)} className="cursor-pointer mt-[20px] ml-[35px] w-12 h-12 p-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <img className="mt-[20px] mr-[35px] w-[193px] h-[52px]" src={Logo} alt='logo'></img>
            </nav>
        </>
    )
}

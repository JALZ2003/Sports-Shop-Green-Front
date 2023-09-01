import { useState } from "react";
import Logo from "../../public/Images/Logo.png"
import Display from './Display';
import DisplayAccount from "./DisplayAccount";
import Account from "../../public/Images/AccountOptions.png"

export default function Navbar({optionsAccount}) {

    const [show, setShow] = useState(false)
    const [showAccount, setShowAccount] = useState(false)
    //const [options, setOptions] = useState([]);

    const options = [
        { to: '/', title: "Home" }
    ]
    

    return (
        <>
            {show && <Display options={options} show={show} setShow={setShow} />}
            {showAccount && <DisplayAccount options={optionsAccount} show={showAccount} setShow={setShowAccount} />}
            <nav className="flex justify-between items-center w-full absolute top-0 z-20">
                <svg onClick={() => setShow(!show)} className="cursor-pointer mt-[20px] ml-[35px] w-12 h-12 p-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <div className="flex items-center">
                    <img onClick={() => setShowAccount(!showAccount)} src={Account} alt="" className="w-10 h-10 cursor-pointer" />
                    <img className="mt-[20px] mr-[35px] w-[193px] h-[52px]" src={Logo} alt='logo'></img>
                </div>

            </nav>
        </>
    )
}

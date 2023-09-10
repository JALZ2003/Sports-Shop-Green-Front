import { useState, useRef, useEffect } from "react";
import Logo from "/Images/Logo.png"
import { Link as Anchor } from 'react-router-dom';
import apiUrl from "../apiUrl";
import header from "../header";
import axios from "axios";

export default function Navbar() {

    const [show, setShow] = useState(false)
    const [login, setLogin] = useState(false)
    const menuIcon = useRef(null)
    const userIcon = useRef(null)

    const signout = async () => {

        try {
            await axios.post(apiUrl + 'auth/signout', null, header())
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.replace('/')
        } catch (error) {
            console.log(error);
        }
    }

    const handleCloseMenu = (event) => {
        const isClickInside = menuIcon.current.contains(event.target)
        if (menuIcon.current !== event.target && !isClickInside) {
            setShow(false)
        }

        if (userIcon.current !== event.target && !isClickInside) {
            setLogin(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleCloseMenu)
        return () => document.removeEventListener('click', handleCloseMenu)
    }, [])

    const [options, setOptions] = useState([]);

    let user = JSON.parse(localStorage.getItem("user"));
    useEffect(
        () => {
            if (user) {
                if (user.role === 0) {
                    setOptions([
                        { to: '/', title: "Home" },
                        { to: '/shop', title: "Shop" },
                        { to: '/seller-form', title: "Sell with us" },
                        { to: '/', title: "Sign Out", onClick: signout },
                    ]);
                } else if (user.role === 1) {
                    setOptions([
                        { to: '/', title: "Home" },
                        { to: '/shop', title: "Shop" },
                        { to: '/', title: "Sign Out", onClick: signout },
                    ]);
                } else if (user.role === 2) {
                    setOptions([
                        { to: '/', title: "Home" },
                        { to: '/shop', title: "Shop" },
                        { to: '/panel', title: "Panel Admin" },
                        { to: '/', title: "Sign Out", onClick: signout },
                    ]);
                }
            }
            else {
                setOptions([
                    { to: '/', title: "Home" },
                    { to: '/signin', title: "Login" },
                    { to: '/signup', title: "Register" },
                    { to: '/shop', title: "Shop" },
                ]);
            }
        }, [])

    return (
        <>
            <nav className="absolute w-full top-0">
                <div className="bg-white">
                    <span className="flex justify-between items-center">
                        <svg onClick={() => setShow(!show)} ref={menuIcon} className="cursor-pointer hover:scale-110 transition w-10 h-10 ml-4 mt-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                        <div>
                            <Anchor to="/">
                                <img className="mt-[20px] sm:ml-[50%] w-[193px] h-[52px]" src={Logo} alt='logo'></img>
                            </Anchor>
                        </div>
                        <div className="hidden pr-4 items-center sm:flex">
                            {user ? (
                                <ul className={`transition-all ease-in duration-500 w-full mt-3 mr-2 relative flex ${login ? ('opacity-100 top-[0px] z-40') : ('opacity-0 top-[-500px] z-0')}`}>
                                    <li className=" w-full bg-gray-200 rounded-lg px-2 hover:bg-gray-300 flex justify-center">
                                        <Anchor to="/" onClick={signout} className='text-black transition hover:scale-110 text-center font-poppins text-[18px] font-semibold leading-6 rounded-lg cursor-pointer py-3'>Sign Out</Anchor>
                                    </li>
                                </ul>
                            ) : (
                                <ul className={`transition-all ease-in duration-500 w-full mt-3 mr-2 relative flex ${login ? ('opacity-100 top-[0px] z-40') : ('opacity-0 top-[-500px] z-0')}`}>
                                    <li className=" w-full bg-gray-200 rounded-l-lg px-2 hover:bg-gray-300 flex justify-center">
                                        <Anchor to="/signin" onClick={() => setLogin(!login)} className='text-black transition hover:scale-110 text-center font-poppins text-[18px] font-semibold leading-6 rounded-lg cursor-pointer py-3'>Log in</Anchor>
                                    </li>
                                    <li className=" w-full bg-gray-200 rounded-r-lg px-2 hover:bg-gray-300 flex justify-center" >
                                        <Anchor to="/signup" onClick={() => setLogin(!login)} className='text-black transition hover:scale-110 text-center font-poppins text-[18px] font-semibold leading-6 rounded-lg cursor-pointer py-3'>Register</Anchor>
                                    </li>
                                </ul>
                            )}

                            <svg onClick={() => setLogin(!login)} ref={userIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 pt-2 pr-2 cursor-pointer transition hover:scale-110">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <Anchor to={"/cart"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-9 pt-2 pl-2 cursor-pointer transition hover:scale-110">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </Anchor>

                        </div>
                    </span>
                </div >

                <ul className={`transition-all ease-in duration-500 w-full pl-4 pb-2 bg-gray-200 relative ${show ? ('opacity-100 top-[0px] z-40') : ('opacity-0 top-[-500px] z-0')}`}>
                    {options?.map((each, index) =>
                        <li className="py-2 w-full bg-gray-200" key={index}>
                            <Anchor onClick={each.onClick} key={index} to={each.to}>
                                <div className='text-black font-poppins text-center text-[18px] font-semibold leading-6 rounded-lg cursor-pointer bg-gray-200 hover:bg-gray-300 hover:scale-110 transition p-2 w-[200px]'>
                                    {each.title}
                                </div>
                            </Anchor>
                        </li>
                    )}
                </ul>
            </nav >
        </>
    )
}

import { Link as Anchor } from 'react-router-dom';
import Profile from "/Images/AccountOptions.png"

export default function NavbarAdmin() {

    const options = [
        { to: '/adminusers', title: "Users" },
        { to: '/adminproducts', title: "Products" },
        { to: '/admincategories', title: "Categories" }
    ]
    return (
        <nav className="absolute w-full top-0">
            <div className="fixed z-30 top-0 left-0 bg-blue w-full lg:h-full py-2 px-2 lg:w-[430px] flex flex-col items-center">
                <h1 className="font-bold text-[36px] text-center py-5 text-white">ADMIN PANEL</h1>
                <hr className='border borde-white w-[90%] block lg:hidden' />
                <div className='w-[120px] h-[120px] lg:flex justify-center items-center bg-white rounded-full hidden'>
                    <img className='w-[100px] h-[100px]' src={Profile}></img>
                </div>
                <div className="lg:flex-col flex-row lg:items-center w-[90%] lg:pt-5 flex justify-center">
                    <Anchor to="/panel">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" text-white w-10 h-10 cursor-pointer lg:mt-4 mt-3 hover:bg-white hover:text-blue rounded-full p-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Anchor>

                    {options?.map((each, index) =>
                        <Anchor key={index} to={each.to} className='text-white text-center text-[15px] font-semibold leading-6 mt-[10px] lg:w-[70%] rounded-lg cursor-pointer py-2 px-2 hover:bg-white hover:text-blue'>{each.title}</Anchor>
                    )}
                    <Anchor to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white w-10 h-10 cursor-pointer lg:mt-4 mt-3 hover:bg-white hover:text-blue rounded-full p-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                    </Anchor>
                </div>
            </div>
        </nav>
    )
}

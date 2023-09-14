import { BsCardChecklist } from "react-icons/bs";
import { Link as Anchor } from "react-router-dom";

export default function NavCreators() {

    const user = JSON.parse(localStorage.getItem('user'));

    const options = [{
        to: '/creatorPanel', title: "Panel", icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
            </svg>
    }, {
        to: '/seller-products', title: "Products", icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
    }, {
        to: '/ordersCreator', title: "Orders", icon: <BsCardChecklist size={23} />
    }, {
        to: '/', title: "Home", icon:
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>


    },]

    return (
        <nav className="absolute w-full top-0">
            <div className="fixed z-30 top-0 left-0 bg-blue w-full lg:h-full py-2 px-2 lg:w-[430px] flex flex-col items-center">
                <h1 className="font-bold text-[36px] text-center py-5 text-white">CREATOR PANEL</h1>
                <hr className='border borde-white w-[90%] block lg:hidden' />
                <div className='w-[120px] h-[120px] lg:flex justify-center items-center bg-white rounded-full hidden'>
                    <img className='w-[100px] h-[100px]' src={user.photo}></img>
                </div>
                <div className="lg:flex-col flex-row lg:items-center w-[90%] lg:pt-5 flex justify-center">
                    {options?.map((each, index) =>
                        <Anchor key={index} to={each.to} className='text-white flex justify-center text-center text-[15px] font-semibold leading-6 mt-[10px] lg:w-[70%] rounded-lg cursor-pointer py-2 px-2 hover:bg-white hover:text-blue'>
                            <div className="pr-2">{each.icon}</div>{each.title}
                        </Anchor>
                    )}
                </div>
            </div>
        </nav>
    )
}
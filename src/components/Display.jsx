import { Link as Anchor, json } from 'react-router-dom';

export default function Display({ options, show, setShow }) {
    return (
        <div className="fixed z-30 top-0 left-0 w-full h-full md:w-[430px] bg-gray-300">
            <div onClick={() => setShow(!show)} className="cursor-pointer absolute rounded-full right-[29px] top-[40px]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:scale-105 transition">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </div>
            <div className="absolute top-[85px] w-full md:w-[430px] flex flex-col items-center ">
                {options?.map((each, index) =>
                    <Anchor onClick={each.onClick} key={index} to={each.to} className='text-black text-center font-poppins text-[15px] font-semibold leading-6 mt-[10px] w-[382px] rounded-lg cursor-pointer py-3 bg-white'>{each.title}</Anchor>
                )}
            </div>
        </div>
    )
}

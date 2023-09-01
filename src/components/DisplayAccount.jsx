import { Link as Anchor,} from 'react-router-dom';

export default function DisplayAccount({showAccount, setShowAccount }) {
    const optionsAccount = [
        { to: '/signin', title: "Signin" },
        { to: '/signup', title: "Signup" },
    ]
    return (
        <div className="fixed z-30 top-16 rounded-md  right-[186px] w-full h-32 md:w-[120px] bg-gray-300">
            <div onClick={() => setShowAccount(!showAccount)} className="cursor-pointer absolute rounded-full right-[29px] top-[40px]">
            </div>
            <div className="absolute w-full md:w-[px] flex flex-col items-center ">
                {optionsAccount?.map((each, index) =>
                    <Anchor onClick={each.onClick} key={index} to={each.to} className='text-black text-center font-poppins text-[15px] font-semibold leading-6 mt-[10px] w-[100px] rounded-lg cursor-pointer py-3 bg-white'>{each.title}</Anchor>
                )}
            </div>
        </div>
    )
}

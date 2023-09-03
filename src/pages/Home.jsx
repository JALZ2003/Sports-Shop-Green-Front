import SportWear from "../../public/Images/SportWear.png"
import Accesories from "../../public/Images/Accesories.png"
import Equipements from "../../public/Images/Equipements.png"
import Tennis from "../../public/Images/Tennis.png"
import Carrousel from "../components/Carrousel"


export default function Home() {
    return (
        <>

            <main className="flex-col justify-around mt-10 ">
                <Carrousel />
                {/* <div className="relative w-full min-h-screen top-[80px]">
            <img src={Banner2} alt="carousel" className="w-full h-[calc(100vh-80px)] object-cover" />
            <div className="flex justify-around py-10 flex-wrap gap-10">
                <img src={Banner1} alt="carousel" className="w-[300px] h-[300px] object-cover rounded-2xl" />
                <img src={Banner1} alt="carousel" className="w-[300px] h-[300px] object-cover rounded-2xl" />
                <img src={Banner1} alt="carousel" className="w-[300px] h-[300px] object-cover rounded-2xl" />
                <img src={Banner1} alt="carousel" className="w-[300px] h-[300px] object-cover rounded-2xl" />
            </div>
        </div> */}
                <div className="flex justify-around py-10 px-4 md:px-2 flex-wrap gap-8 md bg-gray-200 -mt-6">
            
                    <div className="flex-col w-[300px] md:w-[22%] h-[300px] object-cover rounded-2xl overflow-hidden  shadow-lg">
                        <div className=" flex items-end justify-center pb-10 h-full w-full bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${SportWear})` }}>
                            <span className=" flex justify-center  items-center w-[80%] lg:w-[80%] h-16 rounded-md  text-2xl md:text-xl  lg:text-2xl font-bold text-gray-800  bg-gray-100  bg-opacity-60 drop-shadow-2xl">SPORTWEAR</span>
                        </div>
                    </div>

                    <div className="flex-col w-[300px] md:w-[22%] h-[300px] object-cover rounded-2xl overflow-hidden  shadow-lg">
                        <div className=" flex w-full h-full items-end md:items-start justify-center pb-10 md:pt-10 h-full bg-cover bg-center  rounded-2xl" style={{ backgroundImage: `url(${Accesories})` }}>
                            <span className=" flex justify-center  items-center w-[80%] lg:w-[80%] h-16 rounded-md  text-2xl md:text-xl lg:text-2xl font-bold text-gray-800  bg-gray-100  bg-opacity-60 drop-shadow-2xl">ACCESORIES</span>
                        </div>
                    </div>

                    <div className="flex-col w-[300px] md:w-[22%] h-[300px] object-cover rounded-2xl overflow-hidden  shadow-xl">
                        <div className=" flex w-full h-full items-end justify-center pb-10 h-full bg-cover bg-center  rounded-2xl" style={{ backgroundImage: `url(${Equipements})` }}>
                            <span className=" flex justify-center  items-center w-[80%] md:w-[85%] lg:w-[80%] h-16 rounded-md  text-2xl md:text-xl lg:text-2xl font-bold text-gray-800  bg-gray-100  bg-opacity-60 drop-shadow-2xl">EQUIPEMENTS</span>
                        </div>
                    </div>

                    <div className="flex-col w-[300px] md:w-[22%] h-[300px] object-cover rounded-2xl overflow-hidden  shadow-lg">
                        <div className=" flex w-full h-full items-end md:items-start justify-center pb-10 md:pt-10 h-full bg-cover bg-center  rounded-2xl" style={{ backgroundImage: `url(${Tennis})` }}>
                            <span className=" flex justify-center  items-center w-[80%] lg:w-[80%] h-16 rounded-md  text-2xl   font-bold text-gray-800  bg-gray-100  bg-opacity-60 drop-shadow-2xl">TENNIS</span>
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}

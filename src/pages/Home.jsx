import SportWear from "../../public/Images/SportWear.png"
import Accesories from "../../public/Images/Accesories.png"
import Equipements from "../../public/Images/Equipements.png"
import Tennis from "../../public/Images/Tennis.png"
import Carrousel from "../components/Carrousel"


export default function Home() {
    return (
        <>

            <main className="flex-col justify-around">
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
                <div className="flex justify-around py-10 px-2 flex-wrap gap-10">
            
                    <div className="flex-col w-full max-w-sm rounded overflow-hidden  shadow-lg">
                        <div className=" flex items-end justify-center pb-10 h-full w-full bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${SportWear})` }}>
                            <span className=" flex justify-center w-[60%] px-6 pt-4 pb-2  bg-gray-200 rounded-md px-3 py-1 text-2xl font-bold text-gray-700 mr-2 mb-2 bg-white bg-opacity-70">SPORTWEAR</span>
                        </div>
                    </div>

                    <div className="flex-col w-full max-w-sm rounded overflow-hidden  shadow-lg">
                        <div className=" flex w-full h-[350px] items-end justify-center pb-10 h-full bg-cover bg-center  rounded-2xl" style={{ backgroundImage: `url(${Accesories})` }}>
                            <span className=" flex justify-center w-[60%] px-6 pt-4 pb-2  bg-gray-200 rounded-md px-3 py-1 text-2xl font-bold text-gray-700 mr-2 mb-2 bg-white bg-opacity-70">ACCESORIES</span>
                        </div>
                    </div>

                    <div className="flex-col w-full max-w-sm rounded overflow-hidden  shadow-lg">
                        <div className=" flex w-full h-[350px] items-end justify-center pb-10 h-full bg-cover bg-center  rounded-2xl" style={{ backgroundImage: `url(${Equipements})` }}>
                            <span className=" flex justify-center w-[60%] px-6 pt-4 pb-2  bg-gray-200 rounded-md px-3 py-1 text-2xl font-bold text-gray-700 mr-2 mb-2 bg-white bg-opacity-70">EQUIPEMENTS</span>
                        </div>
                    </div>

                    <div className="flex-col w-full max-w-sm rounded overflow-hidden  shadow-lg">
                        <div className=" flex w-full h-[350px] items-end justify-center pb-10 h-full bg-cover bg-center  rounded-2xl" style={{ backgroundImage: `url(${Tennis})` }}>
                            <span className=" flex justify-center w-[60%] px-6 pt-4 pb-2  bg-gray-200 rounded-md px-3 py-1 text-2xl font-bold text-gray-700 mr-2 mb-2 bg-white bg-opacity-70">TENNIS</span>
                        </div>
                    </div>




                </div>
            </main>
        </>
    )
}

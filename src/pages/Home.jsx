import Banner1 from "/Images/Banner1.png"
import Banner2 from "/Images/Banner2.png"


export default function Home() {
    return (
        <div className="relative w-full min-h-screen top-[80px]">
            <img src={Banner2} alt="carousel" className="w-full h-[calc(100vh-80px)] object-cover" />
            <div className="flex justify-around py-10 flex-wrap gap-10 px-2">
                <img src={Banner1} alt="carousel" className="w-[300px] h-[300px] object-cover rounded-2xl" />
                <img src={Banner1} alt="carousel" className="w-[300px] h-[300px] object-cover rounded-2xl" />
                <img src={Banner1} alt="carousel" className="w-[300px] h-[300px] object-cover rounded-2xl" />
                <img src={Banner1} alt="carousel" className="w-[300px] h-[300px] object-cover rounded-2xl" />
            </div>
        </div>
    )
}

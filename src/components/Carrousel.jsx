
import React from "react";
import Banner1 from "../../public/Images/Banner1.png"
import Banner2 from "../../public/Images/Banner2.png"
import Banner3 from "../../public/Images/Banner3.png"
import Banner4 from "../../public/Images/Banner4.png"
import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"

export default function carrousel() {
        const show_categories = [
        { url: Banner1 },
        { url: Banner2 },
        { url: Banner3 },
        { url: Banner4 },
    ]
    const [autoInterval, setAutoInterval] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(()=>{
        start()
        return stop
    }, [])
    const start =() => {
        const interval = setInterval( ()=>{
            const last_slide = currentIndex === show_categories.length - 1
            const new_slide = last_slide ? 0 : currentIndex + 1
            setCurrentIndex(new_slide)
            }, 3000)
        setAutoInterval(interval)
    }
    const stop = ()=>{
        clearInterval(autoInterval)
        
    }
    
    const prev = () => {
        stop()
        const first_slide = currentIndex === 0
        const new_slide = first_slide ? show_categories.length - 1 : currentIndex - 1
        setCurrentIndex(new_slide)
        start()
    }
    const next = () => {
        stop()
        const last_slide = currentIndex === show_categories.length - 1
        const new_slide = last_slide ? 0 : currentIndex + 1
        setCurrentIndex(new_slide)
        start()
    }

    const change_slide = (show_index) => {
        stop()
        setCurrentIndex(show_index)
        start()
    }
       
    
    return (
        <div className=" flex-col justify-center items-center h-screen w-full  px-2 md:px-8 md:mt-10 pt-20 md:pt-10 relative group">
            < div className=" w-full  h-[90%] rounded-2xl bg-center bg-cover duration-500" style={{ backgroundImage: `url(${show_categories[currentIndex].url})` }}>
               
                <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 md:left-10   text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactLeft onClick={prev} size={40} />
                </div>
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 md:right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight onClick={next} size={40} />
                </div>
                
            </div>
            <div className="flex top-4 justify-center py-2 ">
                {show_categories.map((show_categories, show_index) => (
                    <div key={show_index} className=" text-xl md:2xl lg:text-4xl text-gray-600 cursor-pointer hover:text-orange"
                        onClick={() => change_slide(show_index)}>
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    )
}
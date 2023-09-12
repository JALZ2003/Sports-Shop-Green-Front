import { useEffect, useState } from "react";

export default function CardCart({ name, price, stock, image, quantity, action }) {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        let positions = []
        for (let i = 0; i < stock; i++) {
            positions.push(i);
        }
        setOptions(positions);
    }, [])

    return (
        <div className="transition hover:scale-105 flex justify-between mt-4 bg-[#EDF2F4]  w-[99%] md:w-[80%] lg:w-[600px] xl:w-[650px] 2xl:w-[750px] h-48 md:h-52 border-[1px] border-[#000000]">
            <div className="h-full lg:w-1/3 w-[300px] border-r-[1px] border-[#000000]">
                <img src={image} alt="" className="h-full w-full object-cover object-center" />
            </div>
            <div className="flex flex-col justify-around ms-8 md:ms-7 lg:mt-4 l lg:w-[45%] w-[70%] mb-5 mr-10 md:mr-14">
                <div className="flex flex-col sm:flex-row justify-between md:text-[25px] xl:text-[25px] lg:text-[20px] ">
                    <p> {name} </p>
                    <p className="mt-[1px]">Price: ${price}</p>
                </div>
                <p className="lg:text-[20px] lg:w-[50vw]"> {stock > 0 ? "In Stock" : "Not Stock"} </p>
                <div>
                    <select id="cantidad" className="px-2 py-1 border-[1px] rounded-md border-[#000000]">
                        { options.map(each => <option key={each} value={each} selected={each==quantity}> {each} </option>) }
                    </select>
                </div>
                {/* <input type="number" name="" id="" defaultValuevalue="1" className="md:w-16 md:h-10 w-9 h-6 rounded-sm text-center border-[1px] border-[#000000]" /> */}
            </div>
            <button onClick={action} className=" w-[30px] h-[30px] flex items-center justify-center font-semibold text-[20px] hover:cursor-pointer">X</button>
        </div>
    )
}

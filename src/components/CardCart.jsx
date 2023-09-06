import item from "/Images/item.png"
export default function CardCart() {
    return (
        <div className="hover:cursor-pointer flex justify-between mt-96 bg-[#EDF2F4] md:w-[80%] lg:w-[49%] xl:w-[50%] 2xl:w-[40%] w-[85%] h-48 md:h-52 lg:ms-28 xl:ms-52 border-[1px] border-[#000000]  ">
            <div className="h-full lg:w-1/3 w-[300px]">
                <img src={item} alt="" className="h-full w-full object-cover object-center" />
            </div>
            <div className="flex flex-col justify-around ms-8 md:ms-7 lg:mt-4 l lg:w-[45%] w-[70%] mb-5 mr-10 md:mr-14">
                <div className="flex flex-col sm:flex-row justify-between md:text-[25px] xl:text-[25px] lg:text-[20px] ">
                    <p>Name Product</p>
                    <p className="mt-[1px]">Price: $20</p>
                </div>
                <p className="lg:text-[20px] lg:w-[50vw]">In Stock</p>
                <input type="number" name="" id="" defaultValuevalue="1" className="md:w-16 md:h-10 w-9 h-6 rounded-sm text-center border-[1px] border-[#000000]" />
            </div>
            <p className="mr-2 font-semibold text-[20px] hover:cursor-pointer">X</p>
        </div>
    )
}

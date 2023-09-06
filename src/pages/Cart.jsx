import CardCart from "../components/CardCart"
import Summary from "../components/Summary"

export default function Cart() {
    return (
        <div className="flex flex-col w-full mt-96 items-center justify-center">
            <div className="border border-solid border-gray-400 mt-2 w-[90%] lg:hidden" ></div>
            <div className="lg:fixed lg:right-[14%] lg:top-32 w-[200px] mt-5 mb-5">
                <Summary />
            </div>
            <div className="border border-solid border-gray-400 mt-2 w-[90%] lg:hidden" ></div>
            <div className="flex flex-col w-full items-center lg:items-start lg:w-[70%]">
                <CardCart />
                <CardCart />
            </div>



        </div>
    )
}

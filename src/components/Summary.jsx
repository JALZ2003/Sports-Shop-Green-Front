import { Link as Anchor } from "react-router-dom"
import arrow from "/Images/arrowSummary.png"

export default function Summary() {
    return (
        <div className="w-[120%]">
            <Anchor to={"/shop"} className="bg-black text-white flex items-center w-full justify-center h-9">PAY YOUR ORDER! <img src={arrow} className="w-10 h-3 ms-4" alt="" /></Anchor>
            <h1 className="font-bold mt-2">ORDER SUMMARY</h1>
            <div className="flex justify-between mt-2">
                <p>2 products</p>
                <p>$40</p>
            </div>
            <div className="flex justify-between mt-1">
                <p>Shipment</p>
                <p>Free</p>
            </div>
            <div className="border border-solid border-gray-400 mt-2" ></div>
            <div className="flex justify-between mt-2">
                <p>Total</p>
                <p>$40</p>
            </div>
        </div>

    )
}

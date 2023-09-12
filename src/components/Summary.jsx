import { Link as Anchor } from "react-router-dom"
import arrow from "/Images/arrowSummary.png"

export default function Summary({ products, total }) {
    return (
        <div className="w-full">
            <Anchor to={"/shop"} className="bg-blue text-white flex items-center min-w-full w-full justify-between h-9 p-3 hover:scale-105">PAY YOUR ORDER! <img src={arrow} className="w-10 h-3 ms-4" alt="" /></Anchor>
            <h1 className="font-bold mt-2">ORDER SUMMARY</h1>
            <div className="flex flex-col justify-between mt-2">
                {products.map((each, index) => <div key={index} className="flex justify-between">
                    <p> {each.quantity} {each.product_id.name} </p>
                    <p> ${each.quantity * each.product_id.price} </p>
                </div>)}
            </div>
            <div className="flex justify-between mt-1">
                <p>Shipment</p>
                <p>Free</p>
            </div>
            <div className="border border-solid border-gray-400 mt-2" ></div>
            <div className="flex justify-between mt-2">
                <p>Total</p>
                <p> $ {total} </p>
            </div>
            <p className="bg-gray-100 p-6 mt-4 text-justify">FREE SHIPPING FOR MEMBERS + EXPRESS DELIVERY
                Until September 30, take advantage of express delivery for $14. Receive your order the next business day. Applies to orders with confirmed payment until 11:59 pm. <br />Orders with confirmed payment on Fridays after 11:59 pm, will be prepared the following Monday for delivery in 24 hours.
                Also, if you are a member, take advantage of free shipping until September 18 on all your purchases, log in or register to take advantage.</p>
        </div>

    )
}

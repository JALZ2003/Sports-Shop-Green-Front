import { useEffect, useState } from "react"
import CardCart from "../components/CardCart"
import Summary from "../components/Summary"
import { Link as Anchor } from "react-router-dom"
import axios from 'axios';
import apiUrl from '../apiUrl';
import headers from '../header';

export default function Cart() {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        axios(`${apiUrl}carts`, headers()).then(res => {
            setCart(res.data.response.cart);
            setTotal(res.data.response.total);
        }).catch(error => {
            setCart([]);
            setTotal(0);
        })
    }, [])

    console.log(cart);

    return (
        <div className="flex flex-col w-full lg:w-[70%] mt-[148px] items-center justify-center mb-8 z-10 ">


            <div className="flex flex-col justify-between ps-10 pr-10 md:p-0 w-full md:w-[80%] lg:w-[600px] xl:w-[650px] 2xl:w-[750px] lg:items-start">
                <div className="flex justify-between items-center w-full ">
                    <h1 className="font-bold md:text-3xl text-xl">YOUR CART</h1>
                    <Anchor to={"/shop"} className="bg-blue text-white h-9 w-[200px] flex items-center justify-center ms-3 text-center rounded-sm">CONTINUE SHOPPING</Anchor>
                </div>
                <p className="mt-6">The items in your cart are not reserved. Complete the checkout process now to get them.</p>
            </div>
            <div className="border border-solid border-gray-400 mt-2 w-[90%] lg:hidden" ></div>
            <div className="lg:absolute flex items-center justify-center lg:right-[4%] xl:right-[13%] lg:top-32 lg:w-[257px] xl:w-[300px] 2xl:w-[400px] w-[80%] mt-5 mb-5">
                <Summary quantityProducts={cart.length} total={total} />
            </div>
            <div className="border border-solid border-gray-400 mt-2 w-[90%] lg:hidden" ></div>
            <div className="md:border-[1px] pt-5 w-full md:w-[80%] lg:w-[650px] xl:w-[700px] 2xl:w-[800px] mt-4">
                <div className="flex flex-col  w-full items-center mt-4 mb-8">
                    {cart.map((product, index) => <CardCart
                        key={index}
                        stock={product?.product_id?.stock}
                        image={product?.product_id?.url_photo}
                        name={product?.product_id?.name}
                        price={product?.product_id?.price}
                        quantity={product?.quantity}
                    />)}
                </div>
            </div>



        </div>
    )
}

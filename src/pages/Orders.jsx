import axios from "axios";
import { useEffect, useState } from "react";
import apiUrl from "../apiUrl";
import headers from '../header';

export default function Orders() {

    // const [states, setStates] = useState([]);
    // const [orders, setOrders] = useState([]);

    // useEffect(() => {
    //     axios(`${apiUrl}states`).then(res => {
    //         setStates(res.data.response);
    //     }).catch(error => console.log(error));
    // }, [])

    // useEffect(() => {
    //     axios(`${apiUrl}carts`, headers()).then(res => {
    //         console.log(res.data.response.cart);
    //     }).catch(error => console.log(error));
    // }, [])

    return (
        <main className="mt-[148px] mb-[148px] w-full flex items-center justify-center">
            <div className="w-[50%] ">
                <h1 className="flex flex-auto text-4xl font-bold">Mis Pedidos</h1>
                <div className="flex justify-between bg-opacity-25 border-y-4 border-violet-950 w-[480PX] h-[210PX] -ml-24 mt-24 xl:w-[900px] xl:h-[300px] xl:ml-12">
                    <img className="p-3 mt-1 justify-self-auto w-[210px] h-[200px] xl:w-[260px] xl:h-[280px] xl:mt-2" src="../public/images/logoMarca.png" />
                    <div className="flex flex-col  justify-around">
                    <h2 className="text-xl mt-5 font-bold mr-36 ">nombre del producto</h2>
                    <h3 className="tex-center text-lg font-normal">fecha</h3>
                    <p className="">numero del producto</p>
                    <p className="">total</p>
                    </div>
                    <div className="flex flex-col justify-around">
                        <input className=" bg-blue rounded-full w-[50px] h-[50px] text-transparent xl:text-white xl:font-bold ml-0 xl:w-[200px]"
                       type="button"
                       value="ver producto"/>
                        <input className=" bg-orange rounded-full w-[50px] h-[50px] text-transparent xl:text-white xl:font-bold mr-3 xl:w-[200px]"
                        type="button"
                        value="Volver a comprar"/>
                    </div>
                </div>
            </div>

        </main>
    )
}
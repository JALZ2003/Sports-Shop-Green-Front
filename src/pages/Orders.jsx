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
            <div className="w-[50%]">
                Card
            </div>
        </main>
    )
}
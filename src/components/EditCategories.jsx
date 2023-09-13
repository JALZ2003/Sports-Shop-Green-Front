import { useRef, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import {  useDispatch } from 'react-redux';
import axios from "axios"
import apiUrl from "../apiUrl.js"
import Swal from "sweetalert2";
import header from "../header.js"
import productsActions from '../store/actions/products';
const { updateProduct } = productsActions;

export default function EditCategories({ setReload, reload, editP, show, setShow }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        axios.get(apiUrl + "allCategories").then(res => setCategories(res.data.response)).catch(error => console.log(error));
        console.log(apiUrl)
    }, [])


    const editProduct = (each) => {
        setShow(!show)
        setReload(!reload)
        dispatch(updateProduct({
            product_id: each._id,
            name: name.current.value,
            color: category.current.value,

        }))
    }



    const name = useRef();
    const color = useRef();



    return (
        <div className="flex flex-col items-center justify-center w-full  min-h-full py-8 bg-[#EDF2F4] text-black">
            <form className='flex flex-col items-center justify-center w-full' >
                <h1 className='font-bold text-[30px] py-3'>EDIT PRODUCT</h1>

                <div className='flex flex-col py-5 w-full items-center'>
                    <div className='flex w-full justify-center'>
                        <div className='flex flex-col w-[45%] pr-5'>
                            <label className='font-medium text-sm pl-1 pb-1'> Name</label>
                            <input defaultValue={editP.name} ref={name} type="text" className='rounded-lg mb-7 font-thin px-5 hover:border-2 focus:border-black-400 active:bg-black-600 h-10' />
                        </div>

                        <div className='flex flex-col w-[45%]'>
                            <label className='font-medium text-sm pl-1 pb-1'>Color</label>
                            <input defaultValue={editP.color} min="0" ref={color} type="number" className='rounded-lg mb-7 font-thin px-5 hover:border-2 focus:border-black-400 active:bg-black-600 h-10' />
                        </div>
                    </div>
                </div>




                <div className='flex w-full justify-center'>
                    <div className='flex flex-col w-[90%]'>
                        <label className='text-sm font-medium pl-1 pb-1'>Description</label>
                        <textarea defaultValue={editP.description} ref={description} type="text" className='resize-none rounded-lg font-thin px-5 hover:border-2 focus:border-black-400 active:bg-black-600 h-[100px]' />
                    </div>

                </div>
            </form>

            <div className='flex flex-col items-center'>
                <button onClick={() => { editProduct(editP) }} className='bg-[#EC6B2F] rounded-lg py-2 px-5 flex justify-center text-center text-white transition hover:scale-105 hover:border'>SAVE</button>
            </div>
        </div>
    )
}

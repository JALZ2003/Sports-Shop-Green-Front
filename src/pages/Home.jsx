import SportWear from "/Images/SportWear.png"
import Accesories from "/Images/Accesories.png"
import Equipements from "/Images/Equipements.png"
import Tennis from "/Images/Tennis.png"
import Carrousel from "../components/Carrousel"
import CardCategories from "../components/CardCategories"
import { Link as Anchor } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import apiUrl from "../apiUrl"
// import { useSelector, useDispatch } from "react-redux"
// import { useState, useEffect } from "react"
// import categories_actions from "../store/actions/categories"
// const {read_categories} = categories_actions
export default function Home() {
    // const categories = useSelector(store => store.categories.categories.response)
    // const dispatch = useDispatch()
    // // console.log(categories)

    // useEffect(() =>{
    //     dispatch(read_categories())
    // }, [])
    /* 
    
        useEffect(() => {
            axios(`${apiUrl}products?page=${currentPage}`).then(res => {
                setCategory(res.data.response)})}) */
    const [category, setCategory] = useState([]);

    useEffect(() => {
		axios(`${apiUrl}products?category=${category}`).then(res => {
			setCategory(res.data.response);
		})
	}, [])

    return (
        <>
            <main className="flex-col justify-around mt-14 pb-10">
                <Carrousel />
                {/* <CardCategories/> */}
                <div className="flex justify-around py-10 px-4 md:px-2 flex-wrap gap-8 bg-gray-200 -mt-6">

                    <div className="flex-col w-[300px] lg:w-[22%] h-[300px] object-cover rounded-2xl overflow-hidden  shadow-lg">
                        <Anchor to={`/products/${category._id}`} className=" flex items-end justify-center pb-10 h-full w-full bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${SportWear})` }}>
                            <span className=" flex justify-center  items-center w-[80%] lg:w-[80%] h-16 rounded-md  text-2xl md:text-xl  lg:text-2xl font-bold text-gray-800  bg-gray-100  bg-opacity-60 drop-shadow-2xl">SPORTWEAR</span>
                        </Anchor>
                    </div>

                    <div className="flex-col w-[300px] lg:w-[22%] h-[300px] object-cover rounded-2xl overflow-hidden  shadow-lg">
                        <div className=" flex w-full h-full items-end lg:items-start justify-center pb-10 md:pt-10 bg-cover bg-center  rounded-2xl" style={{ backgroundImage: `url(${Accesories})` }}>
                            <span className=" flex justify-center  items-center w-[80%] lg:w-[80%] h-16 rounded-md  text-2xl md:text-xl lg:text-2xl font-bold text-gray-800  bg-gray-100  bg-opacity-60 drop-shadow-2xl">ACCESORIES</span>
                        </div>
                    </div>

                    <div className="flex-col w-[300px] lg:w-[22%] h-[300px] object-cover rounded-2xl overflow-hidden  shadow-xl">
                        <div className=" flex w-full h-full items-end justify-center pb-10 bg-cover bg-center  rounded-2xl" style={{ backgroundImage: `url(${Equipements})` }}>
                            <span className=" flex justify-center  items-center w-[80%] md:w-[85%] lg:w-[80%] h-16 rounded-md  text-2xl md:text-xl lg:text-2xl font-bold text-gray-800  bg-gray-100  bg-opacity-60 drop-shadow-2xl">EQUIPEMENTS</span>
                        </div>
                    </div>

                    <div className="flex-col w-[300px] lg:w-[22%] h-[300px] object-cover rounded-2xl overflow-hidden  shadow-lg">
                        <div className=" flex w-full h-full items-end lg:items-start justify-center pb-10 md:pt-10 bg-cover bg-center  rounded-2xl" style={{ backgroundImage: `url(${Tennis})` }}>
                            <span className=" flex justify-center  items-center w-[80%] lg:w-[80%] h-16 rounded-md  text-2xl   font-bold text-gray-800  bg-gray-100  bg-opacity-60 drop-shadow-2xl">SHOES</span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

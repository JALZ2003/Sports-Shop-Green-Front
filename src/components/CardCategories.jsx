import SportWear from "/Images/SportWear.png"
import Accesories from "/Images/Accesories.png"
import Equipements from "/Images/Equipements.png"
import Tennis from "/Images/Tennis.png"
import Carrousel from "../components/Carrousel"
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import categories_actions from "../store/actions/categories"
const {read_categories} = categories_actions




export default function CardCategories() {
 const categories = useSelector(store => store.categories.categories.response)
    const dispatch = useDispatch()
    const [isLoading, setIsloading] = useState(true)
    console.log(categories)

    useEffect(() =>{
        dispatch(read_categories())
        .then(()=>setIsloading(false))
        .catch((error) =>{
            console.log("Error fetching categories", error)
            setIsloading(false)
        })
    }, [dispatch])
    if (isLoading){
        return <div>Loading...</div>}
    

return(
    <>
    
    <div  className="flex justify-around py-10 px-4 md:px-2 flex-wrap gap-8 bg-gray-200 -mt-6">
        {categories.map((each)=>{
    return(

        <div key={each}className="flex-col w-[300px] lg:w-[17%] h-[300px] md:[200px] lg:[300px] object-contain rounded-2xl overflow-hidden  shadow-lg">
        <div className=" flex items-center justify-center  h-full w-full bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${SportWear})` }} >
            <span  className=" flex justify-center  items-center text-center  w-[80%] lg:w-[80%] h-16 rounded-md  text-2xl md:text-xl  lg:text-2xl font-bold text-gray-800  bg-gray-100  bg-opacity-60 drop-shadow-2xl" style={{ backgroundColor: each.color }}>{each.name}</span>
        </div>
    </div>  
   
    )
    }
)}
 </div>

{/* con color solido */}


 {/* <div  className="flex justify-around py-10 px-4 md:px-2 flex-wrap gap-8 bg-gray-200 -mt-6">
        {categories.map((each)=>{
    return(

        <div key={each}className="flex-col w-[300px] lg:w-[17%] h-[300px] md:[200px] lg:[300px] object-contain rounded-2xl overflow-hidden  shadow-lg">
        <div className=" flex items-center justify-center  h-full w-full bg-cover bg-center rounded-2xl" style={{ backgroundColor: each.color }} >
            <span  className=" flex justify-center  items-center text-center  w-[80%] lg:w-[80%] h-16 rounded-md  text-2xl md:text-xl  lg:text-2xl font-bold text-gray-800  bg-gray-100  bg-opacity-60 drop-shadow-2xl" >{each.name}</span>
        </div>
    </div>  
   
    )
    }
)}
 </div> */}

 </>
)
}

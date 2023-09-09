import { RiShoppingCart2Line } from "react-icons/ri";

const Card = ({ product }) => {
    return (
        <div className="bg-blue-200 p-1 md:p-2 lg:p-3 rounded-lg shadow-md border-2 border-gray-800/10">
            <img
                src={product.url_photo}
                className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg border border-gray-300"
                alt={product.name}
            />
            <div className="p-4">
                <div>
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-blue-700 font-semibold capitalize">{product.name}</h1>
                    <span className="text-gray-500 capitalize">{product.category_id.name}</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <h5 className="text-2xl md:text-3xl lg:text-4xl text-orange">${product.price}</h5>
                    <button className="bg-orange text-black font-bold rounded-full p-2 md:p-3 lg:p-4 hover:bg-orange-600 hover:-translate-y-1 transition-all duration-200 shadow-black shadow-md ">
                        <RiShoppingCart2Line />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;

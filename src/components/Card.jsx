import { RiShoppingCart2Line } from "react-icons/ri";

const Card = ({ product }) => {
    const categoryColor = product.category_id.color || '#000';

    return (
        <div className={`bg-blue-200 p-1 md:p-2 lg:p-3 rounded-lg shadow-md border-l-4  border-gray-800/10`} style={{ borderColor: categoryColor }}>
            <img
                src={product.url_photo}
                className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg border border-gray-300"
                alt={product.name}
            />
            <div className="p-4 flex flex-col">
                <h1 className="text-base md:text-lg lg:text-xl text-blue-700 font-semibold capitalize h-14" title={product.name}>{product.name}</h1>
                <div className=" flex justify-between">
                    <span className="text-gray-500 capitalize">{product.category_id.name}</span>
                    <span className="text-gray-500 capitalize">Stock: {product.stock}</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <h5 className="text-lg md:text-xl lg:text-2xl text-orange">${product.price}</h5>
                    <button className="bg-orange text-black font-bold rounded-full p-1 md:p-2 lg:p-3 hover:bg-orange-600 hover:-translate-y-1 transition-all duration-200 shadow-black shadow-md ">
                        <RiShoppingCart2Line />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;

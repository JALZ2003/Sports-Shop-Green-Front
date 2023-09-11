import { useState } from "react";
import { RiMoneyDollarCircleLine, RiFilter3Line, RiCloseLine } from "react-icons/ri";

const Sidebar = ({ categories, filteredCategories, onCategoryChange, onPriceFilterApply }) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const handleCheckboxChange = (categoryId, isChecked) => {
        onCategoryChange(categoryId, isChecked);
    };

    const handleMinPriceChange = (e) => {
        setMinPrice(e.target.value);
    }

    const handleMaxPriceChange = (e) => {
        setMaxPrice(e.target.value);
    }

    const handleFilterApply = () => {
        const priceFilter = {
            minPrice: parseFloat(minPrice),
            maxPrice: parseFloat(maxPrice)
        };
        onPriceFilterApply(priceFilter);
    }

    return (
        <>
            <div className={`w-[80%] sm:w-[40%] lg:max-w-[300px] z-20 fixed top-0  lg:static ${showSidebar ? "left-0 " : "-left-full "
                } h-full lg:h-auto text-white transition-all bg-blue p-4 lg:p-4 lg:shadow-none ${showSidebar ? "lg:rounded-lg" : "rounded-lg"
                }`}
            >
                <h4 className="my-4 text-white text-lg font-semibold">Categories</h4>
                <div className="flex flex-col gap-2">
                    {categories.map(category => (
                        <div
                            key={category._id}
                            className={`flex flex-col justify-between bg-slate-950`}
                            style={{ backgroundColor: filteredCategories[category._id] ? category.color : '' }}
                        >
                            <input
                                type="checkbox"
                                id={category._id}
                                value={category._id}
                                className={`appearance-none h-1 w-full bg-gray-400 transition-all duration-300`}
                                checked={filteredCategories[category._id] || false}
                                onChange={(e) => handleCheckboxChange(category._id, e.target.checked)}
                            />
                            <label
                                htmlFor={category._id}
                                className='p-1 flex flex-row justify-center px-2 select-none text-white'
                            >
                                {category.name}
                            </label>
                        </div>
                    ))}
                </div>
                <h4 className="my-4 text-white text-lg font-semibold">Price</h4>
                <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="relative">
                        <RiMoneyDollarCircleLine className="absolute left-2 top-1/2 -translate-y-1/2" />
                        <input
                            type="number"
                            placeholder="Min"
                            value={minPrice}
                            onChange={handleMinPriceChange}
                            className="bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full"
                        />
                    </div>
                    <span>-</span>
                    <div className="relative">
                        <RiMoneyDollarCircleLine className="absolute left-2 top-1/2 -translate-y-1/2" />
                        <input
                            type="number"
                            placeholder="Max"
                            value={maxPrice}
                            onChange={handleMaxPriceChange}
                            className="bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full"
                        />
                    </div>
                </div>
                <button
                    type="button"
                    onClick={handleFilterApply}
                    className="bg-orange text-black font-bold rounded-full w-full p-3 hover:-translate-y-1 transition-all duration-200"
                >
                    Apply Filter
                </button>
            </div>
            <button
                onClick={() => setShowSidebar(!showSidebar)}
                className="lg:hidden fixed bottom-4 right-4 bg-orange p-4 rounded-full text-xl"
            >
                {showSidebar ? <RiCloseLine /> : <RiFilter3Line />}
            </button>
        </>
    );
};

export default Sidebar;

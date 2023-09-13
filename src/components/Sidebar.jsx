import { useState } from "react";
import { RiCloseLine, RiFilter3Line, RiMoneyDollarCircleLine } from "react-icons/ri";
import SearchBar from "./SearchBar";

const Sidebar = ({ categories, filteredCategories, onCategoryChange, onPriceFilterApply, onSearch }) => {
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

    const handleSearch = (term) => {
        onSearch(term);
    };

    return (
        <>
            <div className={`w-[80%] sm:w-[40%] lg:max-w-[300px] z-20 fixed top-0  lg:static ${showSidebar ? "left-0 " : "-left-full "
                } h-full lg:h-auto text-white transition-all bg-blue p-4 lg:p-4 lg:shadow-none ${showSidebar ? "lg:rounded-lg" : "rounded-lg"
                }`}
            >
                <SearchBar action={handleSearch} />
                <h4 className="my-4 text-white lg:text-lg font-semibold">Categories</h4>
                <div className="flex flex-col gap-1 lg:gap-2">
                    {categories.map(category => (
                        <div
                            key={category._id}
                            className={`flex items-center bg-slate-950 p-2 lg:p-3 rounded-md cursor-pointer transition-all duration-300 hover:bg-slate-900`}
                            style={{ backgroundColor: filteredCategories[category._id] ? category.color : '' }}
                            onClick={() => handleCheckboxChange(category._id, !filteredCategories[category._id])}
                        >
                            <div className="relative">
                                <input
                                    type="checkbox"
                                    id={category._id}
                                    value={category._id}
                                    className={`appearance-none h-5 w-5 border border-gray-400 bg-gray-800 rounded-md mr-2 checked:bg-blue-500 checked:border-transparent`}
                                    checked={filteredCategories[category._id] || false}
                                    onChange={() => { }}
                                />
                                {filteredCategories[category._id] && (
                                    <div className="absolute top-0 left-0 w-5 h-5 bg-blue-500 rounded-md flex items-center justify-center text-white" >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                            <path fillRule="evenodd" d="M6.293 10.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <div
                                className='select-none text-white cursor-pointer'
                            >
                                {category.name}
                            </div>
                        </div>
                    ))}
                </div>

                <h4 className="my-2 lg:my-4 text-white lg:text-lg font-semibold">Price</h4>
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

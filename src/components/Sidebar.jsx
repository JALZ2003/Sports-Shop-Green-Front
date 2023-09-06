import { useState } from "react";
import {
    RiMoneyDollarCircleLine,
    RiFilter3Line,
    RiCloseLine,
} from "react-icons/ri";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            <div
                className={`w-[80%] sm:w-[40%] lg:max-w-[300px] z-20 fixed lg:static rounded-lg top-20 ${showSidebar ? "left-0" : "-left-full"
                    } h-full lg:h-auto text-white transition-all bg-blue p-4 lg:p-0 shadow-2xl lg:shadow-none ${showSidebar ? "lg:rounded-lg" : ""
                    }`}
            >
                {/* Search */}
                <div className=" rounded-2xl p-4 mb-4 z-20">
                    <h4 className="my-4 text-white text-lg font-semibold">Brands</h4>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="PC" />
                            <label htmlFor="PC">Nike</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="Playstation 5"
                                className="accent-orange"
                            />
                            <label htmlFor="Playstation 5">Adidas</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="Playstation 4"
                                className="accent-orange"
                            />
                            <label htmlFor="Playstation 4">Under Armour</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="Xbox Series"
                                className="accent-orange"
                            />
                            <label htmlFor="Xbox Series">Champions</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="Nintendo Switch"
                                className="accent-orange"
                            />
                            <label htmlFor="Nintendo Switch">Reebok</label>
                        </div>
                    </div>
                    <h4 className="my-4 text-white text-lg">Price</h4>
                    <form className="flex flex-col gap-8">
                        <div className="flex items-center justify-between gap-4">
                            <div className="relative">
                                <RiMoneyDollarCircleLine className="absolute left-2 top-1/2 -translate-y-1/2" />
                                <input
                                    type="number"
                                    className="bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full"
                                />
                            </div>
                            <span>-</span>
                            <div className="relative">
                                <RiMoneyDollarCircleLine className="absolute left-2 top-1/2 -translate-y-1/2" />
                                <input
                                    type="number"
                                    className="bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-orange text-black font-bold rounded-full w-full p-3 hover:-translate-y-1 transition-all duration-200"
                        >
                            Apply Filter
                        </button>
                    </form>
                </div>
            </div>
            {/* Button mobile */}
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
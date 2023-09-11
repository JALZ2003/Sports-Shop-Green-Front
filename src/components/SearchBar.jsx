const SearchBar = ({ action }) => {
    return (
        <div className="relative w-[90%] lg:w-[60%] mx-auto z-10 mt-0 mb-4">
            <div className="relative flex items-center">
                <div className="absolute left-0 top-0 w-14 h-full bg-orange flex items-center justify-center rounded-l-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input onChange={(e) => action(e.target.value)} id="search-input" type="text" placeholder="Search..." className="block font-poppins font-normal text-[24px] leading-[22.84px] p-[10px] text-center w-full rounded-full border-2 hover:border-primary shadow-md focus:outline-none pl-12 bg-transparent" />
            </div>
        </div>
    );
};

export default SearchBar;

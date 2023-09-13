import React from 'react';
import {
    HiChevronDoubleLeft,
    HiChevronDoubleRight
} from "react-icons/hi";

const Pagination = ({ currentPage, totalPages, goToPage, goToPrevPage, goToNextPage }) => {
    const generatePages = () => {
        const pages = [];

        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }

        return pages;
    };

    const visiblePages = generatePages().slice(currentPage - 1, currentPage + 2);

    return (
        <nav className="mt-4">
            <ul className="flex justify-center">
                <li className="cursor-pointer">
                    <a
                        className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full 
            ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'border border-blue-gray-100 bg-transparent text-blue-gray-500'} 
            p-0 text-sm transition duration-150 ease-in-out hover:bg-light-300`}
                        onClick={goToPrevPage}
                        disabled={currentPage === 1}
                    >
                        <HiChevronDoubleLeft />
                    </a>
                </li>
                {visiblePages.map((page) => (
                    <li key={page} className="cursor-pointer">
                        <a
                            className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full 
                                ${currentPage === page ? 'bg-orange text-white' : 'border border-blue-gray-100 bg-transparent text-blue-gray-500'} 
                                p-0 text-sm transition duration-150 ease-in-out hover:bg-light-300`}
                            onClick={() => goToPage(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
                <li className="cursor-pointer">
                    <a
                        className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full 
            ${currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'border border-blue-gray-100 bg-transparent text-blue-gray-500'} 
            p-0 text-sm transition duration-150 ease-in-out hover:bg-light-300`}
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                    >
                        <HiChevronDoubleRight />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;

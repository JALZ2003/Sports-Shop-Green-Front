import React from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const Pagination = ({ currentPage, totalPages, goToPrevPage, goToNextPage, setCurrentPage, hasPrevPage, hasNextPage }) => {
    // Calcula las páginas que se mostrarán en función de la página actual
    const generatePages = () => {
        const pages = [];

        // Si hay menos de 3 páginas en total, muestra todas
        if (totalPages <= 3) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Si la página actual es 1, muestra las páginas 1, 2 y 3
            if (currentPage === 1) {
                pages.push(1, 2, 3);
            }
            // Si la página actual es la última, muestra las páginas finales
            else if (currentPage === totalPages) {
                pages.push(totalPages - 2, totalPages - 1, totalPages);
            }
            // Si la página actual es mayor a 1 y menor que la última, muestra la página actual en el medio
            else {
                pages.push(currentPage - 1, currentPage, currentPage + 1);
            }
        }
        return pages;
    };

    return (
        <nav className="mt-4">
            <ul className="flex justify-center">
                <li className="cursor-pointer">
                    <a
                        className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full 
                    ${!hasPrevPage ? 'bg-gray-200 cursor-not-allowed' :
                                (currentPage === 1 ? 'bg-orange text-white' : 'border border-blue-gray-100 bg-transparent text-blue-gray-500')}
                    p-0 text-sm transition duration-150 ease-in-out hover:bg-light-300`}
                        onClick={goToPrevPage}
                        disabled={!hasPrevPage}
                    >
                        <span className="material-icons text-sm"> <HiOutlineChevronLeft /></span>
                    </a>
                </li>
                {generatePages().map((page) => (
                    <li key={page} className="cursor-pointer">
                        <a
                            className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full 
                        ${currentPage === page ? 'bg-orange text-white' : 'border border-blue-gray-100 bg-transparent text-blue-gray-500'} 
                        p-0 text-sm transition duration-150 ease-in-out hover:bg-light-300`}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
                <li className="cursor-pointer">
                    <a
                        className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full 
                    ${!hasNextPage ? 'bg-gray-200 cursor-not-allowed' :
                                (currentPage === totalPages ? 'bg-orange text-white' : 'border border-blue-gray-100 bg-transparent text-blue-gray-500')} 
                    p-0 text-sm transition duration-150 ease-in-out hover:bg-light-300`}
                        onClick={goToNextPage}
                        disabled={!hasNextPage}
                    >
                        <span className="material-icons text-sm"><HiOutlineChevronRight /></span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;

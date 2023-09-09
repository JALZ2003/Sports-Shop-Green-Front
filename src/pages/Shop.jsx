import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import apiUrl from "../../apiUrl"

function Shop() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [hasPrevPage, setHasPrevPage] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl + `/products?page=${currentPage}`);
                const data = await response.json();
                setProducts(data.response);
                setTotalPages(data.pages);
                setHasPrevPage(data.prev !== null);
                setHasNextPage(data.next !== null);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        }

        fetchData();
    }, [currentPage]);

    const goToPrevPage = () => {
        if (hasPrevPage) {
            setCurrentPage(currentPage - 1);
        }
    }

    const goToNextPage = () => {
        if (hasNextPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div className="min-h-screen flex flex-col mt-16">
            <main className="flex gap-8 p-8 pt-0 mt-10">
                <Sidebar />
                <div className="flex-1 h-full flex flex-col justify-center">
                    <SearchBar />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                        {products.map(product => (
                            <Card key={product._id} product={product} />
                        ))}
                    </div>

                    {/* Pagination */}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        goToPrevPage={goToPrevPage}
                        goToNextPage={goToNextPage}
                        hasPrevPage={hasPrevPage}
                        hasNextPage={hasNextPage}
                    />
                </div>
            </main>
        </div>
    );
}

export default Shop;

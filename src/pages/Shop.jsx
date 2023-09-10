import { useEffect, useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import apiUrl from '../apiUrl';
import axios from "axios";

function Shop() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [hasPrevPage, setHasPrevPage] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [text, setText] = useState("");

    useEffect(() => {
        axios(`${apiUrl}/categories`).then(res => {
            setCategories(res.data.response);
        })
    }, []);

    useEffect(() => {
        axios(`${apiUrl}products?page=${currentPage}`).then(res => {
            setProducts(res.data.response);
            setHasNextPage(res.data.next);
            setHasPrevPage(res.data.prev);
            setTotalPages(res.data.pages);
        })
    }, [currentPage]);

    useEffect(() => {
        axios(`${apiUrl}products?name=${text}`).then(res => {
            setProducts(res.data.response);
        }).catch(err => {
            setProducts([]);
        })
    }, [text]);

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
                <Sidebar categories={categories} />
                <div className="flex-1 h-full flex flex-col justify-center">
                    <SearchBar action={setText} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                        {products.map(product => (
                            <Card key={product._id} product={product} />
                        ))}
                    </div>

                    <Pagination
                        setCurrentPage={setCurrentPage}
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

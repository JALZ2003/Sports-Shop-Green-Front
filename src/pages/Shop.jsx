import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import apiUrl from "../apiUrl";
import axios from "axios";

function Shop() {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [hasPrevPage, setHasPrevPage] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [filteredCategories, setFilteredCategories] = useState({});
    const [priceFilter, setPriceFilter] = useState({});

    useEffect(() => {
        axios(`${apiUrl}products?page=${currentPage}`).then(res => {
            setProducts(res.data.response);
            setTotalPages(res.data.pages);
            setHasPrevPage(res.data.prev !== null);
            setHasNextPage(res.data.next !== null);
        })
    }, [currentPage]);

    useEffect(() => {
        axios(`${apiUrl}categories`).then(res => {
            setCategories(res.data.response);
        })
    }, []);

    const handleCategoryChange = (categoryId, isChecked) => {
        setFilteredCategories(prevState => ({
            ...prevState,
            [categoryId]: isChecked
        }));
    }

    const handlePriceFilterApply = (priceFilter) => {
        setPriceFilter(priceFilter);
    }

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
                <Sidebar
                    categories={categories}
                    filteredCategories={filteredCategories}
                    onCategoryChange={handleCategoryChange}
                    onPriceFilterApply={handlePriceFilterApply}
                />
                <div className="flex-1 h-full flex flex-col justify-center">
                    <SearchBar />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                        {products
                            .filter(product => {
                                const productCategoryId = product.category_id._id;
                                const isCategorySelected = filteredCategories[productCategoryId] || Object.values(filteredCategories).every(value => !value);
                                const isPriceInRange = (
                                    (!priceFilter.minPrice || product.price >= priceFilter.minPrice) &&
                                    (!priceFilter.maxPrice || product.price <= priceFilter.maxPrice)
                                );
                                return isCategorySelected && isPriceInRange;
                            })
                            .map(product => (
                                <Card key={product._id} product={product} />
                            ))
                        }
                    </div>
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

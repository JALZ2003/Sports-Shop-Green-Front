import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Pagination from "../components/Pagination"
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
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios(`${apiUrl}products?page=${currentPage}`);
            const { response: products, prev, next, pages } = response.data;

            setProducts(products);
            setTotalPages(pages);
            setHasPrevPage(prev !== null);
            setHasNextPage(next !== null);
        };

        fetchData();
    }, [currentPage]);

    useEffect(() => {
        axios(`${apiUrl}categories`).then(res => {
            setCategories(res.data.response);
        });
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

    const handleSearchChange = (term) => {
        setSearchTerm(term);
    };

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    }

    const goToPage = (page) => {
        setCurrentPage(page);
    }

    return (
        <div className="min-h-screen flex flex-col mt-16">
            <main className="flex gap-8 p-8 pt-0 mt-10">
                <Sidebar
                    categories={categories}
                    filteredCategories={filteredCategories}
                    onCategoryChange={handleCategoryChange}
                    onPriceFilterApply={handlePriceFilterApply}
                    onSearch={handleSearchChange}
                />
                <div className="flex-1 h-full flex flex-col justify-center">
                    <div className="flex-1 h-full flex flex-col justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                            {products
                                .filter(product => {
                                    const productCategoryId = product.category_id._id;
                                    const isCategorySelected = filteredCategories[productCategoryId] || Object.values(filteredCategories).every(value => !value);
                                    const isPriceInRange = (
                                        (!priceFilter.minPrice || product.price >= priceFilter.minPrice) &&
                                        (!priceFilter.maxPrice || product.price <= priceFilter.maxPrice)
                                    );
                                    const isTextMatch = (
                                        !searchTerm ||
                                        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                        product.description.toLowerCase().includes(searchTerm.toLowerCase())
                                    );
                                    return isCategorySelected && isPriceInRange && isTextMatch;
                                })
                                .map(product => (
                                    <Card key={product._id} product={product} />
                                ))
                            }
                            {!products.some(product => {
                                const productCategoryId = product.category_id._id;
                                const isCategorySelected = filteredCategories[productCategoryId] || Object.values(filteredCategories).every(value => !value);
                                const isPriceInRange = (
                                    (!priceFilter.minPrice || product.price >= priceFilter.minPrice) &&
                                    (!priceFilter.maxPrice || product.price <= priceFilter.maxPrice)
                                );
                                const isTextMatch = (
                                    !searchTerm ||
                                    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                    product.description.toLowerCase().includes(searchTerm.toLowerCase())
                                );
                                return isCategorySelected && isPriceInRange && isTextMatch;
                            }) && <div className="col-span-full row-span-full h-screen flex items-center justify-center"><span className="text-3xl p-6 text-orange rounded-full font-medium">Results not found!</span></div>}
                        </div>
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        goToPrevPage={goToPrevPage}
                        goToNextPage={goToNextPage}
                        hasPrevPage={hasPrevPage}
                        hasNextPage={hasNextPage}
                        goToPage={goToPage}
                    />

                </div>
            </main>
        </div>
    );
}

export default Shop;

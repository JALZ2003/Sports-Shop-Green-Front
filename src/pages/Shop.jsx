import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import apiUrl from "../../apiUrl"

function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl + "/products");
                const data = await response.json();
                setProducts(data.response);
                console.log(data);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        }

        fetchData();
    }, []);

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
                </div>
            </main>
        </div>
    );
}

export default Shop;

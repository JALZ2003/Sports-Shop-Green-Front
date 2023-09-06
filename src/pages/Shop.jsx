import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

function Shop() {
    return (
        <div className="min-h-screen flex flex-col mt-16">
            <main className="flex gap-8 p-8 pt-0 mt-10">
                <Sidebar />
                <div className="flex-1 h-full flex flex-col justify-center items-cente">
                    <SearchBar />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                        <Card
                            img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/qczwvm1niln1wlxbk6hx/flex-control-4-zapatillas-de-training-h9jDl0.png"
                            title="title"
                            category="category"
                            price="51"
                        />
                        <Card
                            img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/qczwvm1niln1wlxbk6hx/flex-control-4-zapatillas-de-training-h9jDl0.png"
                            title="title"
                            category="category"
                            price="40"
                        />
                        <Card
                            img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/qczwvm1niln1wlxbk6hx/flex-control-4-zapatillas-de-training-h9jDl0.png"
                            title="title"
                            category="category"
                            price="48"
                        />
                        <Card
                            img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/qczwvm1niln1wlxbk6hx/flex-control-4-zapatillas-de-training-h9jDl0.png"
                            title="title"
                            category="category"
                            price="60"
                        />
                        <Card
                            img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/qczwvm1niln1wlxbk6hx/flex-control-4-zapatillas-de-training-h9jDl0.png"
                            title="title"
                            category="category"
                            price="120"
                        />
                        <Card
                            img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/qczwvm1niln1wlxbk6hx/flex-control-4-zapatillas-de-training-h9jDl0.png"
                            title="title"
                            category="category"
                            price="120"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Shop;

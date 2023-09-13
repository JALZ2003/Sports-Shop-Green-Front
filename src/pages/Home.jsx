import Carrousel from "../components/Carrousel"
import CardCategories from "../components/CardCategories"

export default function Home() {


    return (
        <>
            <main className="flex-col justify-around mt-14 pb-10">
                <Carrousel />
                <CardCategories />
                <div className="flex justify-around py-5 px-4 md:px-2 flex-wrap gap-8 bg-gray-200 -mt-6">
                    <img className="w-full h-[450px] object-cover" src="https://cdn.create.vista.com/api/media/medium/423303448/stock-photo-collage-sportswoman-exercising-dumbbells-sports-center-banner?token=" alt="" />
                </div>
            </main>
        </>
    )
}

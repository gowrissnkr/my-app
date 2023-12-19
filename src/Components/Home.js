import Card from "./Card"
import Filter from "./Filter"

const Home = () => {

    const handleCategoryChange = (event) => {
        const category = event.target.value
        console.log(category)
    }

    return (
        <div className="flex p-1 z-0 relative w-[100%] justify-center">
            <Filter handleCategoryChange={handleCategoryChange} />
            <Card />
        </div>
    )
}

export default Home
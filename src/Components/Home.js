import Card from "./Card"
import Filter from "./Filter"

const Home = ({showFilter}) => {
    return (
        <div className="flex p-1 z-0 relative w-[100%] justify-center">
        <Filter />
        <Card />
    </div>
    )
}

export default Home
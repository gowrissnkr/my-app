import { useDispatch, useSelector } from "react-redux"
import Filter from "./Filter"
import { useState } from "react"
import { filteredData } from "../features/dataSlice"

const SearchBox = ({ showFilter, setShowFilter }) => {
    const dispatch = useDispatch()
    // const { allData } = useSelector((state) => state)
    const [searchItem, setSearchItem] = useState("")

    const debounceFun = (func, delay) => {
        let timer;
        return function (...args) {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                func(...args)
            }, delay)
        }
    }

    const handleSearch = debounceFun((value) => {
        // const filterData = allData.filter((data) => data.color.toLowerCase().includes(value) || data.type.toLowerCase().includes(value) || data.name.toLowerCase().includes(value))
        dispatch(filteredData(value))
    })

    const handleChange = (event) => {
        const { value } = event.target
        setSearchItem(value);
        handleSearch(value)
    }

    return (
        <div className="mx-auto p-4 w-full relative">
            <div className="w-[70%] flex lg:w-full lg:justify-center">
                <div className="bg-white p-4 rounded-md flex lg:w-[60%]">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                        onChange={handleChange}
                        value={searchItem}
                    />
                    <button className="search-button-container bg-blue-500 text-white px-6 py-2 rounded-r-md">Search</button>
                </div>
                {<div className="md:hidden mx-[5px] flex items-center justify-center">
                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2" onClick={() => setShowFilter(!showFilter)}>Filter</button>
                </div>}
            </div>
            {showFilter && <Filter showFilter={showFilter} />}
        </div>
    )
}

export default SearchBox
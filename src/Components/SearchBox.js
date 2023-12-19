const SearchBox = () => {
    return (

        <div className="mx-auto p-4 flex w-full">
            <div className="w-[70%] flex lg:w-full lg:justify-center">
                <div className="bg-white p-4 rounded-md flex lg:w-[60%]">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                    />
                    <button className="search-button-container bg-blue-500 text-white px-6 py-2 rounded-r-md">Search</button>
                </div>
                <div className="md:hidden mx-[5px] flex items-center justify-center">
                    <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2">Filter</button>
                    </div>
            </div>
        </div>
    )
}

export default SearchBox
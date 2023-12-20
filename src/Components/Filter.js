import CheckBox from "./CheckBox"

const Filter = ({showFilter }) => {
    const handleCategoryChange = (event) => {
        const category = event.target.value
        console.log(category)
    }
    
    return (
        <div id="dropdown" className={`${showFilter ? "block absolute w-[250px] right-[10px]" : "hidden"} lg:block max-h-[500px] z-10 w-[15%] p-2 pl-10 bg-white rounded-lg shadow dark:bg-gray-700 ml-[60px]`}>
            <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Color
            </h6>
            <ul className="space-y-2 text-sm mb-2" aria-labelledby="dropdownDefault">
                <CheckBox id="red" value="red" label="Red" handleChange={handleCategoryChange} />
                <CheckBox id="blue" value="blue" label="Blue" handleChange={handleCategoryChange} />
                <CheckBox id="green" value="green" label="Green" handleChange={handleCategoryChange} />
            </ul>
            <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Gender
            </h6>
            <ul className="space-y-2 text-sm mb-2" aria-labelledby="dropdownDefault">
                <CheckBox id="men" value="men" label="Men" handleChange={handleCategoryChange} />
                <CheckBox id="women" value="women" label="Women" handleChange={handleCategoryChange} />

            </ul>
            <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Price
            </h6>
            <ul className="space-y-2 text-sm mb-2" aria-labelledby="dropdownDefault">
                <CheckBox id="250" value="250" label="0 - Rs.250" handleChange={handleCategoryChange} />
                <CheckBox id="450" value="450" label="Rs.251 - Rs.450" handleChange={handleCategoryChange} />
                <CheckBox id="above" value="above" label="Above Rs.450" handleChange={handleCategoryChange} />
            </ul>
            <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Type
            </h6>
            <ul className="space-y-2 text-sm mb-2" aria-labelledby="dropdownDefault">
                <CheckBox id="polo" value="polo" label="Polo" handleChange={handleCategoryChange} />
                <CheckBox id="hoodie" value="hoodie" label="Hoodie" handleChange={handleCategoryChange} />
                <CheckBox id="basic" value="basic" label="Basic" handleChange={handleCategoryChange} />
            </ul>
        </div>
    )
}

export default Filter
import { useEffect, useState } from "react"
import CheckBox from "./CheckBox"
import { useDispatch } from "react-redux"
import { selectedFilterProduct } from "../features/productSlice"

const Filter = ({ showFilter }) => {

    const dispatch = useDispatch()
    const [selectedItems, setSelectedItems] = useState([])


    const handleCategoryChange = async (event) => {
        const isChecked = event.target.checked
        const { title, value } = event.target
        if (isChecked) {
            setSelectedItems((prevFilters) => {
                const existingFilterItem = prevFilters.findIndex((filter) => filter.title === title);
                if (existingFilterItem !== -1) {
                    const updatedFilters = [...prevFilters];
                    updatedFilters[existingFilterItem].values = [...updatedFilters[existingFilterItem].values, value]
                    return updatedFilters;
                }
                return [...prevFilters, { title, values: [value] }];
            });
        }
        else {
            setSelectedItems((prevState) => {
                const updatedFilters = prevState.map((item) => {
                    if (item.title === title) {
                        const updatedValues = item.values.filter((item) => item !== value);
                        if (updatedValues.length >= 1) {
                            return { title, values: updatedValues }
                        }
                        else {
                            return false
                        }
                    }
                    return item;
                })
                return updatedFilters.filter((item) => item !== false)
            })
        }
    }

    useEffect(() => {
        console.log(selectedItems)
        dispatch(selectedFilterProduct(selectedItems))
    }, [selectedItems, dispatch])



    return (
        <div id="dropdown" className={`${showFilter ? "block absolute w-[250px] right-[10px]" : "hidden"} lg:block max-h-[500px] z-10 w-[15%] p-2 pl-10 bg-white rounded-lg shadow dark:bg-gray-700 ml-[60px]`}>
            <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Color
            </h6>
            <ul className="space-y-2 text-sm mb-2" aria-labelledby="dropdownDefault">
                <CheckBox id="red" category="color" value="red" label="Red" handleChange={handleCategoryChange} />
                <CheckBox id="blue" category="color" value="blue" label="Blue" handleChange={handleCategoryChange} />
                <CheckBox id="green" category="color" value="green" label="Green" handleChange={handleCategoryChange} />
            </ul>
            <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Gender
            </h6>
            <ul className="space-y-2 text-sm mb-2" aria-labelledby="dropdownDefault">
                <CheckBox id="men" category="gender" value="men" label="Men" handleChange={handleCategoryChange} />
                <CheckBox id="women" category="gender" value="women" label="Women" handleChange={handleCategoryChange} />

            </ul>
            <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Price
            </h6>
            <ul className="space-y-2 text-sm mb-2" aria-labelledby="dropdownDefault">
                <CheckBox id="250" category="price" value={250} label="0 - Rs.250" handleChange={handleCategoryChange} />
                <CheckBox id="450" category="price" value={450} label="Rs.251 - Rs.450" handleChange={handleCategoryChange} />
                <CheckBox id="451" category="price" value={451} label="Above Rs.450" handleChange={handleCategoryChange} />
            </ul>
            <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Type
            </h6>
            <ul className="space-y-2 text-sm mb-2" aria-labelledby="dropdownDefault">
                <CheckBox id="polo" category="type" value="polo" label="Polo" handleChange={handleCategoryChange} />
                <CheckBox id="hoodie" category="type" value="hoodie" label="Hoodie" handleChange={handleCategoryChange} />
                <CheckBox id="basic" category="type" value="basic" label="Basic" handleChange={handleCategoryChange} />
            </ul>
        </div>
    )
}

export default Filter
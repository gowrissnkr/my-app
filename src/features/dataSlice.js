import { createSlice,current } from "@reduxjs/toolkit";


const initialState = {
    allData: [],
    filterData: []
}

const dataSlice = createSlice(
    {
        name: "data",
        initialState,
        reducers: {
            getAllData(state, action) {
                state.allData.push(...action.payload)
            },
            filteredData(state, action) {
                console.log(action.payload)
                const filteredItems = [...state.allData.filter((data) => data.name.toLowerCase().includes(action.payload))]
                // state.filterData.push(filteredItems)
                console.log(...filteredItems)
                // console.log(state.filterData)
            }
        }
    }
)

export const { getAllData, filteredData } = dataSlice.actions

export default dataSlice.reducer
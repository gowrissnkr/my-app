import React, { useEffect } from "react";
import NavBar from "./Components/NavBar";
import "./App.css";
import Parent from "./Components/Parent";
import { useDispatch } from "react-redux";
import { DATA_API } from "./constants/constant";
import { getAllData } from "./features/dataSlice";

function App() {

  const dispatch = useDispatch()

  const fetchData = async () => {
    try {
      const response = await fetch(DATA_API)

      if (!response.ok) {
        throw new Error("Error Fetching Data")
      }
      const data = await response.json()
      dispatch(getAllData(data))
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <NavBar />
      <Parent />
    </>
  )
}
export default App

import React, { useEffect } from "react";
import NavBar from "./Components/NavBar";
import "./App.css";
import Parent from "./Components/Parent";
import { useDispatch } from "react-redux";
import { DATA_API, ROUTE_PATH } from "./constants/constant";
import { getAllProduct } from "./features/productSlice";
import CartPage from "./Components/CartPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {

  const dispatch = useDispatch()

  const fetchData = async () => {
    try {
      const response = await fetch(DATA_API)

      if (!response.ok) {
        throw new Error("Error Fetching Data")
      }
      const data = await response.json()
      dispatch(getAllProduct(data))
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
      <Router>
      <NavBar />
        <Routes>
          <Route path={ROUTE_PATH.HOME} element={<Parent />} />
          <Route path={ROUTE_PATH.CART} element={<CartPage />} />
        </Routes>
      </Router>
    </>
  )
}


export default App

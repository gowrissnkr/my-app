import { useState, useEffect } from "react"
import SearchBox from "./SearchBox"
import Home from "./Home"

const Parent = () => {
    const [showFilter, setShowFilter] = useState(false)
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setShowFilter(false)
        }
    }


    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        <>
            <SearchBox showFilter={showFilter} setShowFilter={setShowFilter} />
            <Home showFilter={showFilter} setShowFilter={setShowFilter} />
        </>
    )
}

export default Parent
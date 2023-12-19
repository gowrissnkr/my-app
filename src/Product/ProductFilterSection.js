import React from "react";
import "./product.css"

function ProductFilterSection(props) {
    const { handleChange, genderChange, priceChange,typeChange } = props
    return (
        <section>
            <p>Color</p>
            <label>
                <input className="lists" type="checkbox" name="Red" value="red" onChange={handleChange} /><span className="filter_Name">Red</span>
            </label>
            <br />
            <label>
                <input className="lists" type="checkbox" name="Blue" value="blue" onChange={handleChange} /><span className="filter_Name">Blue</span>
            </label> <br />
            <label>
                <input className="lists" type="checkbox" name="Green" value="green" onChange={handleChange} /><span className="filter_Name">Green</span>
            </label>

            <p>Gender</p>
            <label>
                <input className="lists" type="checkbox" value="women" onChange={genderChange} /><span className="filter_Name">Women</span>
            </label> <br />
            <label>
                <input className="lists" type="checkbox" value="men" onChange={genderChange} /><span className="filter_Name">Men</span>
            </label>

            <p>Price</p>
            <label>
                <input className="lists" type="checkbox" value="0-250" onChange={priceChange} /><span className="filter_Name">0-Rs.250</span>
            </label> <br />
            <label>
                <input className="lists" type="checkbox" value="250-450" onChange={priceChange} /><span className="filter_Name">Rs 250-450</span>
            </label> <br />
            <label>
                <input className="lists" type="checkbox" value="450" onChange={priceChange} /><span className="filter_Name">Rs 450</span>
            </label>

            <p>Type</p>
            <label>
                <input className="lists" type="checkbox" value="Polo" onChange={typeChange}/><span className="filter_Name">Polo</span>
            </label><br />
            <label>
                <input className="lists" type="checkbox" value="Hoodie" onChange={typeChange}/><span className="filter_Name">Hoodie</span>
            </label><br />
            <label>
                <input className="lists" type="checkbox" value="Basic" onChange={typeChange}/><span className="filter_Name">Basic</span>
            </label >
        </section >
    )
}

export default ProductFilterSection
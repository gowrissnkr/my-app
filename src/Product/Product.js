import React from "react";
import ProductCard from "./ProductCard";
import ProductFilterSection from "./ProductFilterSection";
import "./product.css"

function Product(props) {
    const { productList, searchProducts, onAdd, search, productName, handleChange,genderChange ,priceChange,typeChange} = props
    return (
        // Left Filter Section
        <section id="product">
            <div className="left-column">
                <ProductFilterSection handleChange={handleChange}
                genderChange={genderChange}
                priceChange={priceChange}
                typeChange={typeChange}
                />
            </div>

            {/* Right Product Section */}
            <div className="right-column">
                <ProductCard productList={productList}
                    searchProducts={searchProducts}
                    search={search}
                    onAdd={onAdd}
                    productName={productName}
                    
                    
                />
            </div>
        </section>
    )
}

export default Product
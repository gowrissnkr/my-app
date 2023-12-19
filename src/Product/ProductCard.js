import React from "react";

function ProductCard(props) {
    const { productList, searchProducts, onAdd, productName, search} = props
    return (
        <>
        {/* Search Box */}
            <form>
                <input type="search"
                    id='search_product'
                    value={productName}
                    placeholder="Search For Products"
                    onChange={search}
                />
                <button><i className="fa fa-search"></i></button><br />
            </form>

{/* Rendering Products */}
            {searchProducts.length > 0 ?
                searchProducts.map((product,i) => {
                    return (
                        <div className="card-conatiner" id="clothingCards" key={product.id}>
                            <div className="card" >
                                <div className="img">
                                    <img src={product.imageURL} /></div>
                                <div className="details">
                                    <h3> {product.name} </h3>
                                    <h5>Rs {product.price}</h5>
                                </div>
                                <div className="btn">
                                    <button className="add-to-cart" onAdd= {onAdd}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                }) :
                productList.map((product,i) => {
                    return (
                        <div className="card-conatiner" id="clothingCards" key={product.id}>
                            <div className="card">
                                <div className="img">
                                    <img src={product.imageURL} /></div>
                                <div className="details">
                                    <h3> {product.name} </h3>
                                    <h5>Rs {product.price}</h5>
                                </div>
                                <div className="btn">
                                    <button className="add-to-cart" onClick={onAdd}  >Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ProductCard
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/productSlice";

const Card = () => {
  const dispatch = useDispatch()
  const allProduct = useSelector((state) => state.allProduct)
  const filterProduct = useSelector((state) => state.filterProduct)

  const addItemToCart = (id) => {
    const data = allProduct.find((product) => product.id === id)

    if (data) {
      dispatch(addToCart({ ...data, itemQuantity: 1 }))
    }
  }

  const products = filterProduct.length > 0 ? filterProduct : allProduct

  return (
    <main className="w-3/4 mx-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((item) => (
          <div className="bg-white p-4 rounded-md shadow-md" key={item.id}>
            <img src={item.imageURL} alt={item.name} className="w-full h-32 object-fill mb-4" />
            <h3 className="text-lg font-semibold mb-2">{item.name} </h3>
            <p className="text-gray-700 mb-2">${item.price}</p>
            <button disabled={item.quantity <= item.itemQuantity} className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => { addItemToCart(item.id) }}>Add to Cart</button>
          </div>))}
      </div>
    </main>
  )
}

export default Card;
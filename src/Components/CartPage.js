import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { decreaseItem, increaseItem, removeItemFromCart } from "../features/productSlice"

const CartPage = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)

    const total = cartItems.reduce((acc, product) => (acc += product.price * product.itemQuantity), 0)

    const increaseItemQuantity = (id) => {
        dispatch(increaseItem(id))
    }

    const decreaseItemQuantity = (id) => {
        dispatch(decreaseItem(id))
    }

    const removeItem = (id) => {
        dispatch(removeItemFromCart(id))
    }

    return (
        <div className="">
            <div className="container mx-auto mt-10">
                <Link to="/" className="flex font-semibold text-indigo-600 text-sm my-10 pl-[20px]">
                    <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                    Continue Shopping
                </Link>
                {cartItems.length === 0 ?
                    <div className="flex lg:flex-row shadow-md w-full my-10 justify-center items-start p-[20px] ">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Your Cart Is Empty</h1>
                        </div>
                    </div> :
                    <div className="flex flex-col lg:flex-row shadow-md w-full my-10 justify-center items-start p-[20px] ">
                        <div className=" bg-white lg:px-10 w-full">
                            <div className="flex justify-between border-b pb-8">
                                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                                <h2 className="font-semibold text-2xl">{cartItems.length} items</h2>
                            </div>
                            <div className="flex mt-10 mb-5">
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
                                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
                                <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                            </div>
                            {cartItems.map((product) => (
                                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={product.id}>
                                    <div className="flex w-2/5">
                                        <div className="w-20">
                                            <img className="h-24" src={product.imageURL} alt="" />
                                        </div>
                                        <div className="flex flex-col justify-between ml-4 flex-grow">
                                            <span className="font-bold text-sm">{product.name}</span>
                                            <button className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={() => { removeItem(product.id) }}>Remove</button>
                                        </div>
                                    </div>
                                    <div className="flex justify-center w-1/5">
                                        <svg className="fill-current text-gray-600 w-3" onClick={() => { decreaseItemQuantity(product.id) }} viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                        </svg>
                                        <input className="mx-2 border text-center w-8" type="text" readOnly value={product.itemQuantity} />
                                        {product.quantity > product.itemQuantity ? <svg className="fill-current text-gray-600 w-3" onClick={() => { increaseItemQuantity(product.id) }} viewBox="0 0 448 512">
                                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                        </svg> : <span className="text-center w-1/5 font-semibold text-sm">Item Limit exceed</span>}
                                    </div>
                                    <span className="text-center w-1/5 font-semibold text-sm">${product.price}</span>
                                    <span className="text-center w-1/5 font-semibold text-sm">${product.price * product.itemQuantity}</span>
                                </div>
                            ))}
                        </div>
                        <div id="summary" className="w-full lg:w-1/4 px-8 py-10">
                            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                            <div className="flex justify-between mt-10 mb-5">
                                <span className="font-semibold text-sm uppercase">{cartItems.length} Items</span>
                            </div>
                            <div className="border-t mt-8">
                                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                    <span>Total cost</span>
                                    <span>{total}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default CartPage
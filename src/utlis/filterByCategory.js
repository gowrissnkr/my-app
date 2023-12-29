import { priceFilterFunc } from "./priceFilterFunc";


export const filterByCategory = (state, category) => {
    const filt = state.allProduct.filter((product) => {
        return category.every((filter) => {
            const { title, values } = filter
            const productValue = String(product[title]).toLowerCase()
            return Array.isArray(productValue)
                ? values.some((filterValue) => productValue.includes(filterValue))
                : values.includes(productValue);
        })
    })
    return filt
}
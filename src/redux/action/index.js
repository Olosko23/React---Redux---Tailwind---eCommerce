//Adding Item to Cart
export const addCart = (product) => {
    return{
        type: "ADDCART",
        payload: product
    }
}

//Deleting Item from Cart
export const delCart = (product) => {
    return{
        type: "DELITEM",
        payload: product
    }
}
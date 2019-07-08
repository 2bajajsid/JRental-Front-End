const Types = {
    REGISTER_USER: "REGISTER_USER",
    CREATE_PRODUCT: "CREATE_PRODUCT"
}

const registerUser = u => ({
    type: Types.REGISTER_USER, 
    user: u
})

const createProduct = p => ({
    type: Types.CREATE_PRODUCT,
    product: p
})

export default {
    registerUser,
    createProduct,
    Types
}
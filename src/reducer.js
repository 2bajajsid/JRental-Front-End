import ACTIONS from './action'; 
const axios = require('axios');

const defaultState = {
    items: []
}

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.REGISTER_USER: {
            let user = action.user; 
            return {
                ...state,
                username: user.username,
                ID: user.ID
            }
        }

        case ACTIONS.Types.CREATE_PRODUCT: {
            let product = action.product; 
            return {
                ...state,
                productId: product.ID
            }
        }

        default: 
            return state; 
    }
}

export default userReducer; 
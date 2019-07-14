import ACTIONS from './action'; 
const axios = require('axios');

const defaultState = {
    productIDList: []
}

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.REGISTER_USER: {
            let user = action.user; 
            return {
                ...state,
                u: user
            }
        }

        case ACTIONS.Types.CREATE_PRODUCT: {
            let product = action.product; 
            return {
                ...state,
                productIDList: [...state.productIDList, product]
            }
        }

        default: 
            return state; 
    }
}

export default userReducer; 
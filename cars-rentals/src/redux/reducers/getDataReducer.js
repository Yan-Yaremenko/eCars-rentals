import { dataTypes } from '../types'

const initialState = {
    data: []
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case dataTypes.SET_DATA:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};
import { GET_ATTRIBUTE , CREATE_ATTRIBUTE , DELETE_ATTRIBUTE, UPDATE_ATTRIBUTE } from '../types'

const initState = {
    items: [],
}

export default function (state = initState, action) {

    switch (action.type) {
        case CREATE_ATTRIBUTE:

            return {
                ...state,
                items: [ action.payload , ...state.items]
            }

        case GET_ATTRIBUTE:

            return {
                ...state,
                items: action.payload,
            }

        case DELETE_ATTRIBUTE:

            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload._id),
            }

        case UPDATE_ATTRIBUTE:
            let currentItems = [action.payload]

            // replace item
            let updateState = state.items.map(
                obj => currentItems.find(o => o._id === obj._id) || obj
            );
            
            return {
                ...state,
                items:updateState
            }

        default:
            return state
    }

}
import { GET_ATTRIBUTE , CREATE_ATTRIBUTE , DELETE_ATTRIBUTE } from '../types'

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

        default:
            return state
    }

}
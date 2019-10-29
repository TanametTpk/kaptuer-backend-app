import { GET_PROJECT, CREATE_PROJECT, DELETE_PROJECT } from '../types'

const initState = {
    items: [],
}

export default function (state = initState, action) {

    switch (action.type) {
        case CREATE_PROJECT:

            return {
                ...state,
                items: [action.payload, ...state.items]
            }

        case GET_PROJECT:

            return {
                ...state,
                items: action.payload,
            }

        case DELETE_PROJECT:

            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload._id),
            }

        default:
            return state
    }

}
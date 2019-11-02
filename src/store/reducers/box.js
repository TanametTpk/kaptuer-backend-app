import { GET_BOX, CREATE_BOX, DELETE_BOX } from '../types'

const initState = {
    items: [],
}

export default function (state = initState, action) {

    switch (action.type) {
        case CREATE_BOX:

            return {
                ...state,
                items: [action.payload, ...state.items]
            }

        case GET_BOX:

            return {
                ...state,
                items: action.payload,
            }

        case DELETE_BOX:

            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload._id),
            }

        default:
            return state
    }

}
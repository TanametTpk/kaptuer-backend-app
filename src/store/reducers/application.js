import { GET_APPLICATION, CREATE_APPLICATION, DELETE_APPLICATION } from '../types'

const initState = {
  items: [],
}

export default function (state = initState, action) {
  
  switch (action.type) {
    case GET_APPLICATION:
      // console.log(action.payload)
      return {
        ...state,
        items: action.payload,
      }
    case CREATE_APPLICATION:
      return {
        ...state,
        items: [ action.payload, ...state.items ]
      }
    case DELETE_APPLICATION:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload._id)
      }
    default:
      return state
  }

}
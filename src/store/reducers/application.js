import { GET_APPLICATION, CREATE_APPLICATION, DELETE_APPLICATION, SELECT_APPLICATION } from '../types'

const initState = {
  items: [],
  selected: {}
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

    case SELECT_APPLICATION:
      return {
        ...state,
        selected: action.payload
      }
    default:
      return state
  }

}
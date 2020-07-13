import {combineReducers} from 'redux'
import quizReducer from "./quizReducer"
import authReducer from "./authReducer"
import {IS_LOADING, IS_NOT_LOADING} from "../types"

const rootReducer = (state = {isLoading: false}, action) => {
    console.log(action, 'action')
    const {type} = action
  
    if(type === IS_LOADING) {
        return {isLoading: true}
    }
  
    if(type === IS_NOT_LOADING) {
      return {isLoading: false}
    }
  
    return state
  }

export default combineReducers({
    quiz: quizReducer,
    auth: authReducer,
    root: rootReducer
})


import auth from "../../services/auth"
import {USER_LOGGED_OUT, USER_LOGGED_IN, IS_LOADING, IS_NOT_LOADING} from "../types"

export const logIn = (user) => async (dispatch) => {
    console.log('login dispatch')

    dispatch({type: IS_LOADING})

    const data = await auth.login(user)
    dispatch({type: IS_NOT_LOADING})

    console.log(data, 'data')
    dispatch({type: USER_LOGGED_IN, user: data})
}

export const logOut = () => async (dispatch) => {
    dispatch({type: IS_LOADING})

    const data = await auth.logout()

    dispatch({type: IS_NOT_LOADING})
    dispatch({type: USER_LOGGED_OUT})
    
    return data
}
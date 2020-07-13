
const initialState = {
  user: localStorage.getItem('user') || null
}

const authReducer = (state = initialState, action) => {
    const {type, user} = action

    if(type === 'USER_LOGGED_IN') {
        return {user}
    }
    if(type === 'USER_LOGGED_OUT') {
        return {user: null}
    }
    return state
}

export default authReducer
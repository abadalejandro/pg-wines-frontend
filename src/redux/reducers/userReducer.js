
export let userTypes = {
    login: 'LOGIN',
}

let initialState = {
    loggedIn: false,
}

const  userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.login:
            
            break;
    
        default:
            return state;
    }

}


export default userReducer;
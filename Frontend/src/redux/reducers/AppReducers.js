import * as types from "../actions/types";

const initalState = {
    auth: false,
    userid: 0,
    username: '',
    phone: '',
    email: '',
    token: ''
}

const appReducer = (state = initalState, action) => {
    switch (action.type) {
        case (types.SET_AUTH):
            return { ...state, auth: action.data };
        case (types.SET_ID):
            return { ...state, userid: action.data };
        case (types.SET_USERNAME):
            return { ...state, username: action.data };
        case (types.SET_PHONENUM):
            return { ...state, phone: action.data };
        case (types.SET_EMAIL):
            return { ...state, email: action.data };
        case (types.SET_TOKEN):
            return { ...state, token: action.data };
        default:
            return state;
    }
}

export default appReducer 
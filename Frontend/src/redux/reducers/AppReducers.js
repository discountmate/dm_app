import * as types from "../actions/types";

const initalState = {
    auth: false,
    photo: [],
}

const appReducer = (state = initalState, action) => {
    switch (action.type) {
        case (types.SET_AUTH):
            return {...state, auth: action.data};
        case (types.ADDphoto):
            return {...state, photo: photo + action.data}
        default:
            return state;
    }
}

export default appReducer
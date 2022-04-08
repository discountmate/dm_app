import * as types from './types';

export function setAuth(state) {
    return {
        type: types.SET_AUTH,
        data:state,
    }
}

export function ADD(num) {
    return{
        type: types.ADD,
        data:num,
    }
}
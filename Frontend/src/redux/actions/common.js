import * as types from './types';

export function setAuth(state) {
    return {
        type: types.SET_AUTH,
        data:state,
    }
}

export function ADDphoto(list) {
    return{
        type: types.ADDphoto,
        data:list,
    }
}
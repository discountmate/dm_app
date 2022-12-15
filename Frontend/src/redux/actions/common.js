import * as types from './types';

export function setAuth(state) {
    return { type: types.SET_AUTH, data: state }
}

export function SetID(state) {
    return { type: types.SET_ID, data: state }
}

export function SetUsername(state) {
    return { type: types.SET_USERNAME, data: state }
}

export function SetPhoneNum(state) {
    return { type: types.SET_PHONENUM, data: state }
}

export function SetEmail(state) {
    return { type: types.SET_EMAIL, data: state }
}

export function SetToken(state) {
    return { type: types.SET_TOKEN, data: state }
}
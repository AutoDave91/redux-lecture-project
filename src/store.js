import {createStore} from 'redux';

const initialState = {
    username: ''
}
export const UPDATE_USERNAME = 'UPDATE_USERNAME'

function reducer(state=initialState, action){
    // console.log(state);
    switch(action.type){
        case UPDATE_USERNAME: 
            return {
                ...state,
                username: action.payload
            }
        default: return state
    }
}

export default createStore(reducer);
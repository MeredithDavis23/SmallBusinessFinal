import { combineReducers } from 'redux'

const user = (state = null, action) => {
    switch(action.type) {
        case "USER_LOGIN" :
            return action.value; 
        default :
            return state;
    }      
    }

const listings = (state = [], action) => {
    switch(action.type) {
        case 'ADD_LISTING':
            return [...state, action.value]
        case 'REMOVE_LISTING':
            const listings = [...state]
            listings.splice(action.value, 1)
            return listings
        default:
            return state
    }
}

export default combineReducers({ user, listings})
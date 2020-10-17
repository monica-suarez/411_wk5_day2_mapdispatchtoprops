import { combineReducers } from 'redux'

const user = (state = null, action) => state

    const cars = (state = [], action) => {
        switch(action.type){
            case 'ADD_CAR':
                return [...state, action.value]
            default: 
                return state

            case 'REMOVE_CAR':
                const deleted = [...state]
                deleted.splice(action.value, 1)
                return deleted
    }
}

export default combineReducers({ user, cars })



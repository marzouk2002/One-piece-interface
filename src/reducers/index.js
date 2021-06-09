import { combineReducers } from 'redux'
import infoReducer from './infoReducer'
import loginReducer from './loginReducer'
import memberReducer from './memberReducer'

const allReducers = combineReducers({
    login: loginReducer,
    member: memberReducer,
    info: infoReducer
})

export default allReducers
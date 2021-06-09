
const memberReducer = (state= false, action) => {
    switch(action.type) {
        case 'IS_MEMBER':
            return true
        case 'LOGOUT':
            return false
        default :
            return state
    }
}

export default memberReducer
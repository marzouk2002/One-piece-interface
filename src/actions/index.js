
export const isLogged = (bool) => {
    if(bool) {
        return {type:'USER_LOGGED'}
    } 
    else {
        return  {type:'LOGOUT'}
    }
}

export const isMember = (bool) => {
    return bool ? { type:'IS_MEMBER'} : {type:'LOGOUT'}
}

export const setInfo = (data) => {
    if(data) {
        return {
        type: 'SET_INFO',
        payload: data
        }
    } 
    else {
        return  {type:'LOGOUT'}
    }
}
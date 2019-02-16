
const userReducer = (state={}, action) => {
    switch (action.type) {
        case 'GET_TODO':
            return {...state}
    
        default:
            return state;
    }
}
export default userReducer;
import TodoAction from '../Actions/todo-action';

const todoReducer = (state = {
    isLoading: false,
    isError: false,
    errorMessage: '',
    successMessage: ''
}, action) => {

switch (action.type) {
    case TodoAction.GET_TODO:
    return {...state, isLoading: true}

    case TodoAction.GET_TODO_SUCCESSFULLY:
    return {...state, isLoading: false, successMessage: 'success'}

    case TodoAction.GET_TODO_FAILD:
    return {...state, isError: 'Error'}

    default:
    return state;
}
}

export default todoReducer;
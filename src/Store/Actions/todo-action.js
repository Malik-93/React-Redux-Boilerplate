class TodoAction {
    static GET_TODO = 'GET_TODO';
    static GET_TODO_SUCCESSFULLY = 'GET_TODO_SUCCESSFULLY';
    static GET_TODO_FAILD = 'GET_TODO_FAILD';

    static getTodo ()  {
        return {
            type: this.GET_TODO
        }
    }

    static getTodoSuccessfully  ()  {
        return {
            type:this.GET_TODO_SUCCESSFULLY
        }
    }

    static getTodoFailed  () {
        return {
            type: this.GET_TODO_FAILED
        }
    }

}

export default TodoAction
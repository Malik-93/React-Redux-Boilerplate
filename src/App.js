import React, { Component } from 'react';
import todoAction from './Store/Actions/todo-action';
import { connect } from 'react-redux'
class App extends Component {
  
  componentDidMount() {
    console.log(this.props)
    this.props.getTodo()
    console.log(this.props)
  }
  
  componentWillReceiveProps(nextProps) {
  console.log('componentWillReceiveProps', nextProps)  
  }
  
  render() {
    return (
      <div>
        <h1>Hello Redux***</h1>        
        </div>
    )
  }
}

const mapStateToprops = (state) => {
 return{
   isLoading: state.todoReducer.isLoading,
   isError: state.todoReducer.isError
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getTodo: (data) => dispatch(todoAction.getTodo(data) )
  }
}

export default connect( mapStateToprops, mapDispatchToProps ) (App);
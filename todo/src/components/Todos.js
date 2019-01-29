import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions';

class Todos extends Component {
    state = {
        newItem:''
    }




handleChanges = e => {
    this.setState({newItem: e.target.value})
}



addNewToDo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newItem)
}


toggleTodo = (e, index) => {
    e.preventDefault();
    this.props.toggleTodo(index) 
}


render() {
    return (
    <>

    <h1>TO DO'S</h1>

    <input 
        type="text"
        value={this.state.newItem}
        onChange={this.handleChanges} />

    <button onClick={this.addNewToDo}> Add a To Do!</button>

    <div>
        {this.props.todos.map(( list, index ) => (
            <h2 onClick={e => this.toggleTodo(e, index)}
            key={index}>
            {list.value} </h2>
        ))}

    </div>

    </>

            )
        }
    }

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps, { addTodo , toggleTodo }) (Todos);

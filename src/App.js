import React, { Component } from 'react';
import './App.css';
import {addTodo, clearDone, loadTodo, updateTodo} from "./Todo/actions";
import {connect} from 'react-redux';


const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: name => {
            dispatch(addTodo(name));
        },

        updateTodo: (id, done) => {
            dispatch(updateTodo(id, done))
        },

        clearDone: () => {
            dispatch(clearDone())
        },

        loadTodo: () => {
            dispatch(loadTodo())
        }
    }
};

const mapStateToProps = (state) => {
    return {
        todos: state.addTodoReducer,
        numberOfDone: state.addTodoReducer.filter( todo => todo.done).length
    }
};


class App extends Component {

    constructor(props) {
        super(props);

        this.newTodo = React.createRef();

    }

    onCheckboxChange(e) {
        this.props.updateTodo(e.currentTarget.getAttribute('data-todo-id'), e.currentTarget.checked);
    }

    onInputChange(e) {
        e.preventDefault();
        this.props.addTodo(this.newTodo.current.value);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.loadTodo.bind(this)}>Load</button>

                <h1>{this.props.numberOfDone}/{this.props.todos.length}</h1>
                <ul>
                    {this.props.todos.map( (todo, index) => <li className={'todo-done-'+ todo.done} key={index}>{todo.name}
                    <input data-todo-id={index} type='checkbox' onChange={this.onCheckboxChange.bind(this)} checked={todo.done}/>
                    </li>)}
                </ul>
                <form onSubmit={this.onInputChange.bind(this)}>
                    <input ref={this.newTodo}/>
                    <input type='submit'/>
                </form>

                <button onClick={this.props.clearDone.bind(this)}>clear done</button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
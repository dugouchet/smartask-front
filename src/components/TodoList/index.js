import React, { Component, PropTypes } from 'react';
import Todo from './../TODO';
// import axios from 'axios';
// const url = 'http://localhost:8080/fruits';


class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
        };
    }

    // todo : fix error with axios ...
    // componentDidMount() {
    //     axios.get(url, {headers: {'Access-Control-Allow-Origin': '*',
    //         proxy: {
    //             host: 'localhost',
    //             port: 8080
    //         }
    //     }})
    //         .then(response => console.log(response))
    //         .catch(response => console.log(response))
    //         .then(data => this.setState({todos: data}));
    // }

    render() {
        return (<ul>
            {this.props.todos.map(todo => (
                <Todo key={todo.id} {...todo} onClick={() => this.props.onTodoClick(todo.id)}/>
            ))}
        </ul>);
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default TodoList;

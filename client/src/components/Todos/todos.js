import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTodos, createNewTodo } from '../../redux/actions/todos'
import TodoItem from './todoItem';

const Todos = ({ fetchTodos, createNewTodo, todos }) => {
    const [createTodo, setCreateTodo] = useState({ title: '' });
    useEffect(() => {
        fetchTodos();
    },[]);
    useEffect(() => {
        if(todos.newTodoAdded) {
            setCreateTodo({title:''})
        }
    }, [todos.newTodoAdded]);
    const addTodo = (e) => {
        createNewTodo(createTodo);
    }
    return (
        <>
            <div className="input">
                <input type="text" value={createTodo.title} name="title" onChange={(e) => setCreateTodo({ "title": e.target.value })} />
                <button onClick={(e) => addTodo(e)}>add</button>
            </div>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>

            </div>
            <div style={{display:'flex'}}>
            {todos.todos?.map((ele) => {
                return (
                    <TodoItem key={ele.id} todos={ele} />
                )
            })
            }
            </div>

        </>
    )
}

Todos.propTypes = {
    fetchTodos: PropTypes.func.isRequired,
    createNewTodo: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    todos: state.todos,
    // data: state.todos
})

export default connect(mapStateToProps, { fetchTodos, createNewTodo })(Todos);
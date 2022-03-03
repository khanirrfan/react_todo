import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTodos, createNewTodo } from '../../redux/actions/todos'
import TodoItem from './todoItem';

const Todos = ({ fetchTodos, createNewTodo, todos }) => {
    const [createTodo, setCreateTodo] = useState({ title: '' });
    const [status, setStatus] = useState('')
    useEffect(() => {
        fetchTodos();
    },[]);
    useEffect(() => {
        if(todos.newTodoAdded) {
            setCreateTodo({title:''})
        }
    }, [todos.newTodoAdded]);

    const addTodo = (e) => {
        if(createTodo.title === ''){
            alert("Please enter task name");
            return false;
        }
        createNewTodo(createTodo);
    }
    // const sortTodos = (type) => {

    // }
    return (
        <>
        
            <div className="input">
                <input type="text" placeholder = "Add tasks ..." value={createTodo.title} name="title" onChange={(e) => setCreateTodo({ "title": e.target.value })} />
                <button onClick={(e) => addTodo(e)}>Add task</button>
            </div>
            {/* <div>
                <button onClick={()=>sortTodos('All')}>All</button>
                <button onClick={()=>sortTodos('Active')}>Active</button>
                <button onClick={()=>sortTodos('Completed')}>Completed</button>

            </div> */}
            <div style={{display:'flex', flexWrap:'wrap', width:'100%', justifyContent:'flex-start'}}>
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
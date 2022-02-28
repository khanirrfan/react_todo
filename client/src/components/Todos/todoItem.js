import React, { useState } from 'react'
import { connect } from 'react-redux';
import { deleteTodo, updateTodo } from '../../redux/actions/todos';

const TodoItem = ({ deleteTodo, updateTodo, todos }) => {
	const [update, setUpdate] = useState(false);
	const [todoId, setTodoId] = useState(null)
	const handleCheckboxClick = () => {

	};

	const handleDeleteClick = (id) => {
		deleteTodo(id);
	};
	const handleUpdateClick = (update) => {
		updateTodo(update);
		// setUpdate(!update)

	}
	return (
		<>
			<div style={{ height: '80px', border: '1px solid', width: '100%', minWidth: '200px', margin: '10px' }}>
				<div style={{ display: 'flex', justifyContent:'space-between' , alignContent: 'center', alignItems: 'center', height: '40px', margin:'0 10px' }}>
					<span>{todos?.title}</span> 
					{todos.status === 'completed' ? <span>✅</span> :''}
				</div>
				<button onClick={() => handleDeleteClick(todos.id)} className='btn btn-danger'>
					Delete
				</button>
				<button onClick={() => handleUpdateClick(todos)} className='btn btn-danger'>update</button>
				
			</div>
		</>
	)
}

const mapStateToProps = (state) => {

}

export default connect(mapStateToProps, { deleteTodo, updateTodo })(TodoItem)
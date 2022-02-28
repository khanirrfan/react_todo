import React, { useState } from 'react'
import { connect } from 'react-redux';
import { deleteTodo, updateTodo } from '../../redux/actions/todos';

const TodoItem = ({ deleteTodo, updateTodo, todos }) => {
	const [updateValue, setUpdateValue] = useState(false);
	const [stateValue, setStateValue] = useState('')

	const handleDeleteClick = (id) => {
		deleteTodo(id);
	};
	const handleUpdateClick = (update) => {
		console.log(stateValue);
		debugger
		const input = {...update, title: stateValue}
		if(stateValue !== ''){
			updateTodo(input);
		} else {
			alert('Title has not been changed');
		}

	}
	const changeToUpdate = (todo) => {
		console.log('todo', todo);
		setUpdateValue(!updateValue);
		setStateValue(todo.title);
	}
	const changeStatus = (todos) => {
		const updateBody = {
			...todos, status:'completed'
		}
		updateTodo(updateBody);
	}
	return (
		<>
			<div style={{ color:'#7247AE',height: '80px',  minWidth: '250px', margin: '10px', borderRadius:'12px', background:'#fff', padding:'10px' }}>
				<div style={{ display: 'flex', justifyContent:'space-between' , alignContent: 'center', alignItems: 'center', height: '40px', margin:'0 10px' }}>
					{
					updateValue === false ? 
						<span onClick={()=>changeToUpdate(todos)}>{todos?.title}</span> 
						: <input style={{color:'red'}} type="text" value = {stateValue} onChange={(e) =>setStateValue(e.target.value)}/> 
					}
					{todos.status === 'completed' ? <span>✅</span> :''}
				</div>
				<button onClick={() => handleDeleteClick(todos.id)}>
					Delete
				</button>
				{todos.status !== 'completed' ? <button onClick={() =>changeStatus(todos)}>Done</button> : ''}
				{todos.status !== 'completed' ? <button onClick={() => handleUpdateClick(todos)}>update</button> : ''}
				
			</div>
		</>
	)
}

const mapStateToProps = (state) => {

}

export default connect(mapStateToProps, { deleteTodo, updateTodo })(TodoItem)
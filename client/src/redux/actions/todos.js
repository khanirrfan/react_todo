import { FETCH_TODOS, FETCH_TODOS_ERROR, CREATE_TODO, CREATE_TODO_ERROR, UPDATE_TODO, UPDATE_TODO_ERROR,DELETE_TODO, DELETE_TODO_ERROR } from "./types";

import axiosInterface from "../../utils/https";


export const fetchTodos = () => async dispatch => {
    try {
        const todosList = await axiosInterface.get("/todos");
        dispatch({
            type:FETCH_TODOS,
            payload:todosList.data
        })
    } catch (error) {
        dispatch({
            type:FETCH_TODOS_ERROR,
            payload:error.response.data
        })
    }
}

export const createNewTodo = (bodyParams) => async dispatch => {
    const body = {
        status:'active',
        ...bodyParams
    }
    try {
        const res = await axiosInterface.post("/todos", body);

        dispatch({
            type:CREATE_TODO,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:CREATE_TODO_ERROR,
            payload:error
        })
        
    }
}

export const updateTodo = (update) =>async dispatch => {
    try {
        const res = await axiosInterface.put(`/todos/${update.id}`, update);
        dispatch({
            type:UPDATE_TODO,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:UPDATE_TODO_ERROR,
            payload:error
        })
    }
}

export const deleteTodo = (id)=> async dispatch => {
    console.log("id", id)
    try {
        const res = await axiosInterface.delete(`/todos/${id}`);
        dispatch({
            type:DELETE_TODO,
            payload:id
        })
    } catch (error) {
        dispatch({
            type:DELETE_TODO,
            payload: error
        })
    }
}
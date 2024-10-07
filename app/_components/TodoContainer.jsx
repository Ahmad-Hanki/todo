'use client'
import TodoList from './TodoList'
import AddNote from './AddNote'
import { useState, useEffect } from 'react'
import toast, { LoaderIcon } from 'react-hot-toast'
import { deleteAPI, getAPI, patchAPI, postAPI, putAPI } from '@/services/fetchAPI'

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const fetchTodoList = async () => {
    try {
      const res = await getAPI('/todo');
      if (res.status === 'success') {
        setTodos(res.data)
      
      } else {
        console.log(res.error)
      }
    } catch (error) {
      console.error(error.message)
    
    }
  }
  useEffect(() => {

    fetchTodoList();
  }, []);

  const addTodo = async (title) => {
    const newTodo = {title}
    try {
      const res = await postAPI('/todo', newTodo);
      if (res.status === 'success') {
        setTodos((prevTodos) => [res.data, ...prevTodos])
        toast.success(res.message)
      } else {
        console.error(res.error);
      }
    } catch (error) {
      console.error(error.message)
    }
  }
  const completeTodo = async (todo) => {
    try {
      const updateTodo = {
        completed: !todo.completed
      };
      const res = await patchAPI(`/todo/${todo.id}`, updateTodo);
      if (res.status === 'success') {
        setTodos((prevTodos) => (
          prevTodos.map((todoItem) => (
            todoItem.id === todo.id ? { ...todoItem, completed: updateTodo.completed } : todoItem
          ))
        ))
      } else {
        console.error(res.error)
      }
    } catch (error) {
      console.error(error.message)
    }
  }
  const deleteTodo = async (id) => {
    try {
      const res = await deleteAPI(`/todo/${id}`);
      if (res.status === 'success') {
        fetchTodoList();
        toast.success(res.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  const editTodo = async (updatedTodo) => {
    try {
      const res = await putAPI(`/todo/${updatedTodo.id}`, updatedTodo);
      if (res.status === 'success') {
        toast.success(res.message);
        fetchTodoList();
      } else {

      }
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <div className='max-w-[750px] flex flex-col items-center justify-center mx-auto my-10'>
      <h1 className='uppercase mb-5 text-center'> Todo List</h1>
      <div className="flex gap-3 items-center mb-3">
       
      </div>
      <div className="relative w-[500px]">
        <TodoList editTodo={editTodo} deleteTodo={deleteTodo} todos={todos} completeTodo={completeTodo} />
        <AddNote addTodo={addTodo} />
      </div>
    </div>
  )
}

export default TodoContainer
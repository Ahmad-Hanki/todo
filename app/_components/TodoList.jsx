'use client';
import { useState } from "react";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

const TodoList = ({ todos, completeTodo, deleteTodo, editTodo }) => {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState('');
  const [selectedTodo, setSelectedTodo] = useState(null); 
  const handleChange = (val) => {
    setValue(val);
  }
  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  }
  const openEditModal = (todo) => {
    setSelectedTodo(todo);  
    setValue(todo.title);  
    toggleModal();  
  }
  const handleEdit = async () => {
    if (value.trim() == '') return;
    const updateItem = {
      ...selectedTodo, 
      title: value,

    };
    await editTodo(updateItem);
    toggleModal();

  }

  return (
    <>
       <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center pb-3 border-b text-gray-400 border-[#6C63FF] mb-3"
          >
            <div className="flex gap-3">
              <input
                type="checkbox"
                id={todo.id}
                checked={todo.completed}
                onChange={() => completeTodo(todo)}
              />

              <label
                onClick={() => completeTodo(todo)}
                className={todo.completed ? "line-through text-gray-500" : ""}
                htmlFor={todo.id} >
                {todo.title}
              </label>
            </div>
            <div className="flex gap-3">
              <button onClick={() => openEditModal(todo)}> 
                <MdModeEditOutline size={20} />
              </button>
              <button onClick={() => deleteTodo(todo.id)}>
                <MdDelete />
              </button>
            </div>
            {showModal && selectedTodo?.id === todo.id && (
              <div className="fixed w-[400px] h-[300px] bg-black border border-gray-500 p-3 rounded-md top-[80px] -translate-x-1/2 left-1/2 shadow-md">
                <div className="text-center uppercase text-xl mb-5">Edit note</div>

                <input 
                  onChange={(e) => handleChange(e.target.value)} 
                  value={value} 
                  type="text" 
                  placeholder="Edit note" 
                  className='bg-transparent h-[35px] w-full px-2 rounded-md border border-gray-400 text-gray-400' 
                />

                <div className="flex justify-between items-center absolute left-5 bottom-3 w-[90%]">
                  <button onClick={toggleModal} className="py-2 px-4 rounded-md text-[#6C63FF] font-medium border border-[#6C63FF]">Cancel</button>
                  <button onClick={handleEdit} className="bg-[#6C63FF] py-2 px-4 rounded-md text-white">Edit</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;

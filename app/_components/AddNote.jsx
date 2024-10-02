'use client'
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const AddNote = ({ addTodo }) => {
    const [showModal, setShowModal] = useState(false);
    const [value, setValue] = useState('');
    const handleChange = (val) => {
        setValue(val);
    }
    const toggleModal = () => {
        setShowModal(prevShowModal => !prevShowModal);
    }
    const handleAddTodo = async () => {
        if (value.trim() === '') return;
        await addTodo(value);
        setValue('');
        toggleModal();
    }
   

    return (
        <div>
            <button onClick={toggleModal} className="flex items-center justify-center absolute right-0  top-[400px] w-[50px] h-[50px] rounded-full bg-[#6C63FF] text-white"><IoMdAdd size={25} /></button>
            {showModal && (
                <div className="fixed w-[400px] h-[300px] bg-black border border-gray-500 p-3 rounded-md top-[80px] -translate-x-1/2  left-1/2 shadow-md">
                    <div className="text-center uppercase text-xl mb-5">New note</div>

                    <input onChange={(e) => handleChange(e.target.value)} value={value} type="text" placeholder="Add new note" className='bg-transparent h-[35px] w-full sm px-2 rounded-md border border-gray-400 text-gray-400' />
                    <div className="flex justify-between items-center absolute left-5 bottom-3 w-[90%]">
                        <button onClick={toggleModal} className="py-2 px-4 rounded-md text-[#6C63FF] font-medium border border-[#6C63FF]">Cancel</button>
                        <button onClick={handleAddTodo} className="bg-[#6C63FF] py-2 px-4 rounded-md">Apply</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default AddNote
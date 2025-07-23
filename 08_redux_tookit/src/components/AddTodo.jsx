import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input,setInput] = useState('');
    const dispatch = useDispatch()

    const addTodoHandle = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandle} className=''>
            <input
                type='text'
                className='block w-1/2 m-auto border-3 mt-2 text-xl py-2 px-4 rounded-xl'
                placeholder='Enter a Todo'
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
            <button className='block w-1/12 m-auto border-3 mt-2 rounded-2xl cursor-pointer active:bg-green-100' type='submit'>Add Todo</button>
        </form>
    )
}

export default AddTodo

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch()
    return (
        <>
            <div className='w-1/2 m-auto text-2xl font-bold underline'>Todos</div>
            <div className='w-1/2 m-auto text-lg mt-2 font-semibold'>
                {todos.map((todo)=>(
                    <li 
                    className='list-none w-full flex justify-between items-center border-3 rounded-2xl h-14 px-4 mt-2' 
                    id={todo.id}>
                        {todo.text}

                        <button 
                        onClick={()=>dispatch(removeTodo(todo.id))}
                        className='border-2 ml-2 w-1/12 rounded-xl active:bg-red-200'
                        >
                            X
                        </button>
                    </li>
                ))}
            </div>
        </>
    )
}

export default Todos

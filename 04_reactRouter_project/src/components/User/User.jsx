import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
    return (
        <div className='text-xl font-bold text-center my-10'>
            <p className='bg-blue-300 w-fit m-auto px-10 py-4 rounded-xl'>User: {userId}</p>
        </div>
    )
}

export default User

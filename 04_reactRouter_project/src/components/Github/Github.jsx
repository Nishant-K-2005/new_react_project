import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()


    // ------------Without Using Loader--------------

    // const [data,setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Nishant-K-2005')
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    // },[])



    return (
        <div className='text-xl font-bold my-10'>
            <p className='w-fit mx-auto bg-blue-300 px-10 py-4 rounded-xl'>Github Followers: {data.followers}</p>
            <img src={data.avatar_url} width={200} className='mt-2 mx-auto'></img>
        </div>
    )
}

export default Github

// ----------------Function Used in Loader-----------------
export const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/Nishant-K-2005')
    return response.json()
}
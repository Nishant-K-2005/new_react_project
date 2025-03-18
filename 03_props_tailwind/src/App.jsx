import { useState } from 'react'
import Card from './components/card'
import User from './components/User'

function App() {
    let user1 = {
        userId:"nk0910",
        phone:1234567890
    }
    let user2 = {
        userId: "rahhul_123",
        phone:9876543210
    }


    return (
        <>
            <Card name_="Nishant" user={user1}/>
            <Card name_="Rahul" user={user2}/>
            <User name_="Govind" role="Android Devloper"/>
            <User name_="Mehul" role="Java Devloper"/>
        </>
    )
}

export default App

import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
import './login.css'
function Login() {
	const [userName, setUserName] = useState('');
	const [pass, setPass] = useState('');
	const {setUser} = useContext(UserContext)
	const handleSubmit = (e)=>{
		e.preventDefault();
		setUser({userName,pass});
	}
	return (
		<div>
			<h2>Login</h2>
			<input 
			value={userName} 
			onChange={(e)=>{
				setUserName(e.target.value);
			}}
			type='text' placeholder='username' />

			<input
			value={pass} 
			onChange={(e)=>{
				setPass(e.target.value);
			}}
			type='text' placeholder='password' />
			<button onClick={handleSubmit}>Submit</button>
		</div>
	)
}

export default Login

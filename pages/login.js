import { useState } from 'react'

import { AiOutlineUser, AiFillLock } from 'react-icons/ai'
import styles from '@/styles/Login.module.css'
import containers from '@/styles/Containers.module.css'
import Link from 'next/link'

const login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	return (
		<div>
			<h2>Login</h2>
			<form
				onSubmit={(e) => handleSubmit(e)}
				className={styles.loginForm}
				autoComplete='off'
			>
				<div className={`${styles.inputField} ${styles.email}`}>
					<AiOutlineUser />
					<input
						type='email'
						required
						name='email'
						placeholder='Email'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className={`${styles.inputField} ${styles.password}`}>
					<AiFillLock />
					<input
						type='password'
						required
						name='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<input type='submit' value='Login' />
			</form>
			<div
				className={containers.flex}
				style={{
					justifyContent: 'space-around',
					alignItems: 'center',
					marginTop: '3em',
				}}
			>
				<p>No Account ?</p>
				<Link href='/register' passRef>
					<button className={styles.register}>Register</button>
				</Link>
			</div>
		</div>
	)
}

export default login

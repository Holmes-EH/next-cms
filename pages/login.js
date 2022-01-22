import { useState } from 'react'

import { AiOutlineUser, AiFillLock } from 'react-icons/ai'
import styles from '@/styles/Login.module.css'

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
					<input type='email' name='email' placeholder='Email' />
				</div>
				<div className={`${styles.inputField} ${styles.password}`}>
					<AiFillLock />
					<input
						type='password'
						name='password'
						placeholder='Password'
					/>
				</div>
				<input type='submit' value='Login' />
			</form>
		</div>
	)
}

export default login

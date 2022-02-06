import { useState } from 'react'

import { AiOutlineUser, AiFillLock, AiOutlineMail } from 'react-icons/ai'
import styles from '@/styles/Login.module.css'
import containers from '@/styles/Containers.module.css'

const register = () => {
	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		const data = { name, surname, email, password }
		console.log(data)
	}

	return (
		<div>
			<h2>Register Account</h2>
			<form
				onSubmit={handleSubmit}
				className={styles.loginForm}
				autoComplete='off'
			>
				<div className={`${styles.inputField} ${styles.email}`}>
					<AiOutlineUser />
					<input
						type='text'
						name='name'
						required
						placeholder='Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className={`${styles.inputField} ${styles.email}`}>
					<AiOutlineUser />
					<input
						type='text'
						name='surname'
						placeholder='Surname'
						value={surname}
						onChange={(e) => setSurname(e.target.value)}
					/>
				</div>
				<div className={`${styles.inputField} ${styles.email}`}>
					<AiOutlineMail />
					<input
						type='email'
						name='email'
						required
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className={`${styles.inputField} ${styles.password}`}>
					<AiFillLock />
					<input
						type='password'
						name='password'
						required
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className={`${styles.inputField} ${styles.password}`}>
					<AiFillLock />
					<input
						type='password'
						name='confirmPassword'
						required
						placeholder='Confirm Password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
				</div>
				<input type='submit' value='Register' />
			</form>
		</div>
	)
}

export default register

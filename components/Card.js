import { useState } from 'react'

import {
	IoEllipsisHorizontalCircleSharp,
	IoEllipsisHorizontalCircleOutline,
} from 'react-icons/io5'

import styles from '@/styles/Containers.module.css'
import styles2 from '@/styles/admin/Dashboard.module.css'

const Card = ({ title, body, postDate, createdAt }) => {
	const [actionHover, setActionHover] = useState(false)
	return (
		<div className={`${styles2.card} ${styles.flex} ${styles.column}`}>
			<div
				className={styles.action}
				onMouseEnter={() => setActionHover(true)}
				onMouseLeave={() => setActionHover(false)}
			>
				{actionHover ? (
					<IoEllipsisHorizontalCircleSharp />
				) : (
					<IoEllipsisHorizontalCircleOutline />
				)}
			</div>
			<h3>{title}</h3>
			<p>{body}</p>
			<p style={{ fontSize: '0.8em' }}>
				{createdAt &&
					`• Created : ${new Date(createdAt).toLocaleDateString(
						'fr',
						{
							day: 'numeric',
							month: 'numeric',
							year: '2-digit',
						}
					)}`}
				<br />
				{postDate ? (
					`• Published : ${new Date(postDate).toLocaleDateString(
						'fr',
						{
							day: 'numeric',
							month: 'numeric',
							year: '2-digit',
						}
					)}`
				) : (
					<>
						• <b>Not published</b>
					</>
				)}
			</p>
		</div>
	)
}

export default Card

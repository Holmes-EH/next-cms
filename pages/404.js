import styles from '@/styles/404.module.css'
import Link from 'next/link'

const Custom404 = () => {
	return (
		<>
			<div className={styles.numbers}>
				<div>4</div>
				<div>0</div>
				<div>4</div>
			</div>
			<h2>The page you asked for cannot be found !</h2>
			<Link href='/' passRef>
				<h3 className={styles.explanation}>
					<a>Go to Home Page</a>
				</h3>
			</Link>
		</>
	)
}

export default Custom404

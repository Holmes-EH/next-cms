import Navbar from './Navbar'
import styles from '@/styles/Containers.module.css'

const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<Navbar />
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>Footer</footer>
		</div>
	)
}

export default Layout

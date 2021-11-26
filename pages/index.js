import Head from 'next/head'
import styles from '@/styles/Containers.module.css'

const Home = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>CMS</title>
				<meta name='description' content='CMS Boilerplate' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Welcome</h1>

				<p className={styles.description}>
					Get started by heading to <a href='/admin'>/admin</a>
				</p>
			</main>

			<footer className={styles.footer}>Footer</footer>
		</div>
	)
}

export default Home

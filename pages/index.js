import Head from 'next/head'
import styles from '@/styles/Containers.module.css'
import Post from '@/components/Post'
import posts from 'postData'

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

				{posts.map((post) => {
					return (
						<div key={post.time} className={styles.post}>
							<Post blocks={post.blocks} />
						</div>
					)
				})}
			</main>

			<footer className={styles.footer}>Footer</footer>
		</div>
	)
}

export default Home

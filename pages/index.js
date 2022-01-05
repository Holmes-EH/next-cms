import Head from 'next/head'
import styles from '@/styles/Containers.module.css'
import Link from 'next/link'
import Card from '@/components/Card'
import posts from 'postData'

const Home = () => {
	return (
		<>
			<Head>
				<title>CMS</title>
				<meta name='description' content='CMS Boilerplate' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<h1 className={styles.title}>Welcome</h1>

			{posts.map((post) => {
				return (
					<div key={post.time} className={styles.post}>
						<Link href={`/posts/${post.slug}`} passHref>
							<a>
								<Card
									title={post.blocks[0].data.text}
									body='Lorem ipsum dolor sit amet consectetur adipisicing elit. (...)'
									createdAt='2021-11-26'
									postDate='2021-11-26'
								/>
							</a>
						</Link>
					</div>
				)
			})}
		</>
	)
}

export default Home

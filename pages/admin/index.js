import Head from 'next/head'
import { useState } from 'react'

import Card from '@/components/Card'

import styles from '@/styles/Containers.module.css'
import styles2 from '@/styles/admin/Dashboard.module.css'

import { IoCloseCircleSharp, IoCloseCircleOutline } from 'react-icons/io5'

const index = () => {
	const [displayInfo, setDisplayInfo] = useState(true)
	const [closeHover, setCloseHover] = useState(false)
	return (
		<div className={styles.container}>
			<Head>
				<title>CMS - Admin</title>
				<meta name='description' content='CMS Boilerplate - Admin' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<h1>Dashboard</h1>
				<h2 style={{ alignSelf: 'flex-start' }}>Posts :</h2>
				{displayInfo && (
					<section className={styles.yellowSection}>
						<div
							className={styles.action}
							onClick={() => setDisplayInfo(false)}
							onMouseEnter={() => setCloseHover(true)}
							onMouseLeave={() => setCloseHover(false)}
						>
							{closeHover ? (
								<IoCloseCircleSharp />
							) : (
								<IoCloseCircleOutline />
							)}
						</div>
						<p>
							Below, you will find a couple of drafts,{' '}
							<b>ready to be published</b>
						</p>
						<p>
							You can either <b>modify them</b>, or{' '}
							<b>delete them</b> to create your own from scratch.
						</p>
						<p>
							Just remember to <b>publish them</b>, so your
							visitors may read your awesome content
						</p>
					</section>
				)}

				<div className={`${styles.flex} ${styles2.posts}`}>
					<Card
						title='A very long title for a post title, but is very descriptive'
						body='Lorem ipsum dolor sit amet consectetur adipisicing elit. (...)'
						createdAt='2021-11-26'
						postDate='2021-11-26'
					/>
					<Card
						title='A short post title'
						body='Lorem ipsum dolor sit amet consectetur adipisicing elit. (...)'
						createdAt='2021-11-26'
					/>
				</div>
			</main>
		</div>
	)
}

export default index

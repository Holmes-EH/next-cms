import { useState } from 'react'
import { useRouter } from 'next/router'
import Post from '@/components/Post'

import dynamic from 'next/dynamic'
const Editor = dynamic(() => import('@/components/Editor.js'), { ssr: false })

import posts from 'postData'
import { BiEdit } from 'react-icons/bi'
import styles from '@/styles/Post.module.css'

const BlogPost = ({ postData }) => {
	const router = useRouter()

	const [edit, setEdit] = useState(false)
	const [dataFromProps, setDataFromProps] = useState(postData)

	if (router.isFallback) {
		return <div>Loading...</div>
	}

	if (edit) {
		return (
			<div>
				<div
					className={styles.adminAction}
					onClick={() => setEdit(false)}
				>
					<BiEdit />
					Finish Edit
				</div>
				<div className={styles.container}>
					<Editor
						blocks={dataFromProps.blocks}
						updateData={setDataFromProps}
						setEdit={setEdit}
					/>
				</div>
			</div>
		)
	}

	return (
		<div>
			<div className={styles.adminAction} onClick={() => setEdit(true)}>
				<BiEdit />
				Edit
			</div>
			<div className={styles.container}>
				<Post
					title={dataFromProps.title}
					blocks={dataFromProps.blocks}
				/>
			</div>
		</div>
	)
}

export async function getStaticPaths() {
	const paths = posts.map((post) => ({
		params: { slug: post.slug },
	}))

	return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
	const postData = posts.filter((post) => post.slug === params.slug)[0]
	if (!postData) {
		return {
			notFound: true,
		}
	}
	return {
		props: {
			postData,
		},
		revalidate: 10,
	}
}

export default BlogPost

import { useState } from 'react'
import { useRouter } from 'next/router'
import Post from '@/components/Post'

import dynamic from 'next/dynamic'
const Editor = dynamic(() => import('@/components/Editor.js'), { ssr: false })

import { createReactEditorJS } from 'react-editor-js'

import posts from 'postData'
import { BiEdit } from 'react-icons/bi'
import styles from '@/styles/Post.module.css'

const BlogPost = ({ postData }) => {
	const router = useRouter()
	const [edit, setEdit] = useState(false)

	if (router.isFallback) {
		return <div>Loading...</div>
	}

	if (edit) {
		const ReactEditorJS = createReactEditorJS()
		return (
			<div>
				<div
					className={styles.adminAction}
					onClick={() => setEdit(false)}
				>
					<BiEdit />
					Edit
				</div>
				<div className={styles.container}>
					<Editor blocks={postData.blocks} />
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
				<Post title={postData.title} blocks={postData.blocks} />
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

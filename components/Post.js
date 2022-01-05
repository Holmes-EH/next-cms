import outputData from '@/utils/outputPostData'

const Post = ({ title, blocks }) => {
	return (
		<>
			<h1>{title}</h1>
			{blocks.map((block, index) => {
				return outputData(block, index)
			})}
		</>
	)
}

export default Post

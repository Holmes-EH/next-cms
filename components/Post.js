import outputData from '@/utils/outputPostData'

const Post = ({ blocks }) => {
	return blocks.map((block, index) => {
		return outputData(block, index)
	})
}

export default Post

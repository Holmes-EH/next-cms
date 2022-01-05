import Image from 'next/image'
import parse from 'html-react-parser'
import styles from '@/styles/Post.module.css'

const outputData = (block, index) => {
	switch (block.type) {
		case 'title':
			return <h1 key={index}>{parse(block.data.text)}</h1>
		case 'header':
			switch (block.data.level) {
				case 1:
					return <h1 key={index}>{parse(block.data.text)}</h1>
				case 2:
					return <h2 key={index}>{parse(block.data.text)}</h2>
				case 3:
					return <h3 key={index}>{parse(block.data.text)}</h3>
				case 4:
					return <h4 key={index}>{parse(block.data.text)}</h4>
				case 5:
					return <h5 key={index}>{parse(block.data.text)}</h5>
				default:
					throw new Error('Header level must be specified')
			}
		case 'image':
			return (
				<Image
					key={index}
					src={block.data.url}
					layout='responsive'
					width={700}
					height={450}
					alt={block.data.alt}
				/>
			)
		case 'paragraph':
			return <p key={index}>{parse(block.data.text)}</p>
		case 'list':
			switch (block.data.style) {
				case 'unordered':
					return (
						<ul key={index} style={{ textAlign: 'left' }}>
							{block.data.items.map((element, liIndex) => {
								return (
									<li key={`li-${index}${liIndex}`}>
										{element}
									</li>
								)
							})}
						</ul>
					)

				default:
					throw new Error('List block style must be specified')
			}
		default:
			//throw new Error('Block type must be specified')
			break
	}
}

export default outputData

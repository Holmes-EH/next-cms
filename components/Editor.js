import { createReactEditorJS } from 'react-editor-js'
import { EDITOR_JS_TOOLS } from '@/utils/tools'

const Editor = ({ blocks }) => {
	const ReactEditorJS = createReactEditorJS()
	return (
		<ReactEditorJS
			defaultValue={{ blocks: blocks }}
			tools={EDITOR_JS_TOOLS}
		/>
	)
}

export default Editor

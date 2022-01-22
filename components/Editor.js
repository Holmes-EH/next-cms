import { useRef, useCallback } from 'react'
import { createReactEditorJS } from 'react-editor-js'
import { EDITOR_JS_TOOLS } from '@/utils/tools'

import styles from '@/styles/admin/Editor.module.css'

const Editor = ({ blocks, updateData, setEdit }) => {
	const ReactEditorJS = createReactEditorJS()
	const editorCore = useRef(null)

	const handleInitialize = useCallback((instance) => {
		editorCore.current = instance
	}, [])

	const saveData = async () => {
		const outputData = await editorCore.current.save()
		setEdit(false)
		updateData(outputData)
	}

	return (
		<>
			<button onClick={saveData} className={styles.save}>
				Save
			</button>
			<ReactEditorJS
				onInitialize={handleInitialize}
				defaultValue={{ blocks: blocks }}
				tools={EDITOR_JS_TOOLS}
			/>
		</>
	)
}

export default Editor

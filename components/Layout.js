import Navbar from './Navbar'
import styles from '@/styles/Containers.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Layout = ({ children }) => {
	const router = useRouter()
	const [curUrl, setCurUrl] = useState('')
	const [translateOnExitValue, setTranslateOnExitValue] = useState(-10)
	useEffect(() => {
		setCurUrl(router.asPath)
	})

	useEffect(() => {
		const handleRouteChange = (url) => {
			url.length > curUrl.length
				? setTranslateOnExitValue(-20)
				: setTranslateOnExitValue(20)
		}

		router.events.on('routeChangeStart', handleRouteChange)

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method:
		return () => {
			router.events.off('routeChangeStart', handleRouteChange)
		}
	}, [curUrl])

	return (
		<div className={styles.container}>
			<Navbar />

			<AnimatePresence exitBeforeEnter>
				<motion.main
					className={styles.main}
					key={router.pathname}
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					exit={{ opacity: 0, x: translateOnExitValue }}
					transition={{ duration: 0.3 }}
				>
					{children}
				</motion.main>
			</AnimatePresence>
			<footer className={styles.footer}>Footer</footer>
		</div>
	)
}

export default Layout

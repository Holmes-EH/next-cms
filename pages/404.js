import styles from '@/styles/404.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Custom404 = () => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	}
	const item = {
		hidden: { opacity: 0, y: -15, rotateY: 90 },
		show: { opacity: 1, y: 0, rotateY: 0 },
	}
	return (
		<>
			<motion.div
				className={styles.numbers}
				variants={container}
				initial='hidden'
				animate='show'
				transition={{
					type: 'spring',
				}}
			>
				<motion.div variants={item}>4</motion.div>
				<motion.div variants={item}>0</motion.div>
				<motion.div variants={item}>4</motion.div>
			</motion.div>
			<motion.h2
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.6 }}
			>
				The page you asked for cannot be found !
			</motion.h2>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, duration: 0.5 }}
			>
				<Link href='/' passRef>
					<h3 className={styles.explanation}>
						<a>Go to Home Page</a>
					</h3>
				</Link>
			</motion.div>
		</>
	)
}

export default Custom404

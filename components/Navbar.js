import Link from 'next/link'
import Logo from '../public/vercel.svg'
import styles from '@/styles/Navbar.module.css'

const Navbar = () => {
	return (
		<div className={styles.container}>
			<Link href='/' passHref>
				<a>
					<Logo style={{ maxWidth: '300px' }} />
				</a>
			</Link>
			<div className={styles.navLinkContainer}>
				<Link href='/about'>About</Link>
				<Link href='/blog'>Blog</Link>
				<Link href='/login'>Login</Link>
			</div>
		</div>
	)
}

export default Navbar

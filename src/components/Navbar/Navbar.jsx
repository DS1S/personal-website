import { useState } from 'react';
import styles from './Navbar.module.css';
import NavbarLinks from './NavbarLinks/NavbarLinks';

export default function NavBar() {
	const defaultActiveLinks = [ false, false, false, false ];
	const links = [ 'Profile', 'Experience', 'Projects', 'Contact' ];

	const [ activeLinks, setActiveLinks ] = useState(defaultActiveLinks);
	const [ showMenu, setShowMenu ] = useState(false);

	const handleLinkClick = (index) => {
		const newActiveLinks = [ ...defaultActiveLinks ];
		newActiveLinks[index] = true;
		setActiveLinks(newActiveLinks);
	};

	const handleHamburgerClick = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div className={styles.navbarContainer}>
			<div className={styles.hamburgerMenu}>
				<div className={styles.hamburger} onClick={handleHamburgerClick}>
					<div className={styles.hamburgerLayer} />
					<div className={styles.hamburgerLayer} />
					<div className={styles.hamburgerLayer} />
				</div>
				<NavbarLinks 
					styles={styles} 
					showMenu={showMenu} 
					activeLinks={activeLinks}
					links={links}
					toggleable={true}
					handleLinkClick={handleLinkClick}
				/>
			</div>
			<NavbarLinks 
				styles={styles} 
				showMenu={showMenu} 
				activeLinks={activeLinks}
				links={links}
				toggleable={false}
				handleLinkClick={handleLinkClick} 
			/>
		</div>
	);
}

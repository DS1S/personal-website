import styles from './Hero.module.css';
import HeroBackground from './HeroBackground/HeroBackground';
import { BigHead } from '@bigheads/core';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Hero() {

	const [ swapAvatar, setSwapAvatar ] = useState(false);


	return (
		<div className={styles.heroContainer}>
			<HeroBackground />
			<div className={styles.avatarContainer}>
				<BigHead
					className={styles.avatar}
					onClick={() => setSwapAvatar(!swapAvatar)}
					accessory={swapAvatar ? "shades" : "none"}
					body="chest"
					circleColor="blue"
					clothing="shirt"
					clothingColor="blue"
					eyebrows="leftLowered"
					eyes="happy"
					faceMask={false}
					faceMaskColor="green"
					facialHair={swapAvatar ? "mediumBeard" : "none"}
					graphic="react"
					hair="short"
					hairColor="brown"
					hat="none4"
					hatColor="black"
					lashes={false}
					lipColor="red"
					mask
					mouth="grin"
					skinTone="light"
				/>
			</div>
			<div className={styles.heroIntroduction}>
				<p className={styles.heroText}>Hiya! I am</p>
				<h3 className={styles.largeHeroText}>Daniel Saunders</h3>
				<p className={styles.heroText}> 
					a third-year computer science student at the University of Toronto.  I often do <span className={styles.highlightedText}>Beep Boop</span> stuff on my spare time.  
				</p>
				<div className={styles.socialsContainer}>
					<FontAwesomeIcon className={styles.socialIcon} size="3x" icon={["fab", "github"]}/>
					<FontAwesomeIcon className={styles.socialIcon} size="3x" icon={["fab", "linkedin"]}/>
					<FontAwesomeIcon className={styles.socialIcon} size="3x" icon={["fa", "envelope"]}/>
				</div>
			</div>
		</div>
	);
}

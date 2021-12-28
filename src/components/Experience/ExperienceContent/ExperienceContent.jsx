import { uid } from 'react-uid';
import styles from './ExperienceContent.module.css';

export default function ExperienceContent(props) {
	return (
		<div className={styles.experienceContentContainer}>
			<div>
				<img className={styles.companyImg} src={props.imgSrc} alt="Company Logo" />
			</div>
			<div>
				<h3>{props.company}</h3>
				<h4>{props.roleTitle}</h4>
				<p>
					{props.startDate} - {props.endDate}
				</p>
			</div>
			<div>
                <ul>
                {props.contentBlocks.map((description, index) => (
                    <li className={styles.descriptionBullet} key={uid(index + description)}>{description}</li>
                ))}
                </ul>
			</div>
		</div>
	);
}

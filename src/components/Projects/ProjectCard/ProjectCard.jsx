import styles from './ProjectCard.module.css';

export default function ProjectCard(props) {
	return (
		<div className={styles.projectCardContainer}>
			<h2 className={styles.title}>{props.title}</h2>
			<div className={styles.imageContainer}>
				<img className={styles.projectImg} src={props.imgSrc} alt={props.title} />
			</div>
			<h4 className={styles.technologies}>{props.technologies}</h4>
			<p>{props.description}</p>
			<div className={styles.linksContainer}>
				<p>Demo</p>
				<p>Github</p>
			</div>
		</div>
	);
}

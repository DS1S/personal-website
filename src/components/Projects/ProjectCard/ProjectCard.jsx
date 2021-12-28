import styles from './ProjectCard.module.css';

export default function ProjectCard(props) {
	return (
		<div className={styles.projectCardContainer}>
			<h2>{props.title}</h2>
			<img src={props.imgSrc} alt={props.title} />
			<h4>{props.technologies}</h4>
			<p>{props.description}</p>
			<div>
				<p>Demo</p>
				<p>Github</p>
			</div>
		</div>
	);
}

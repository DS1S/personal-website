import ProjectCard from './ProjectCard/ProjectCard';
import projectsData from './projectsData';
import styles from './Projects.module.css';


export default function Projects() {

	return (
		<div className={styles.projectsContainer}>
			<h2 className={`section-title ${styles.projectsText} ${styles.projectsTitle}`}>Projects</h2>
			<p className={`${styles.projectsText} ${styles.projectsDescription}`}>
				A currated list of notable projects I have worked most recently. Majority relate to full-stack web
				development or software architecutre.
			</p>
			<div className={styles.projectCardsContainer} />
		</div>
	);
}

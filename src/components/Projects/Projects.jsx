import ProjectCard from './ProjectCard/ProjectCard';
import { projectsData } from './projectsData';
import styles from './Projects.module.css';
import { uid } from 'react-uid';


export default function Projects() {

	const bufferElements = []
	for (let i = 0; i < (projectsData.length % 4); i++) {
		bufferElements.push(<div className={styles.buffer}></div>)			
	}

	return (
		<div className={styles.projectsContainer}>
			<h2 className={`section-title ${styles.projectsText} ${styles.projectsTitle}`}>Projects</h2>
			<p className={`${styles.projectsText} ${styles.projectsDescription}`}>
				A currated list of notable projects I have worked most recently. Majority relate to full-stack web
				development or software architecutre.
			</p>
			<div className={styles.projectCardsContainer} >
				{projectsData.map((data, index) => (
					<ProjectCard {...data} key={uid(index)} />
				))}
				{bufferElements}
			</div>
		</div>
	);
}

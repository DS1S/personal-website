import ProjectCard from './ProjectCard/ProjectCard';
import { projectsData } from './projectsData';
import styles from './Projects.module.css';
import { uid } from 'react-uid';
import { forwardRef } from 'react';


function Projects(props, ref) {

	const bufferElements = []
	for (let i = 0; i < (projectsData.length % 4); i++) {
		bufferElements.push(<div className={styles.buffer} key={uid(i + projectsData.length + 1)}></div>)			
	}

	return (
		<div ref={ref} className={styles.projectsContainer} id='projects'>
			<h2 className={`section-title ${styles.projectsText} ${styles.projectsTitle}`}>Projects</h2>
			<p className={`${styles.projectsText} ${styles.projectsDescription}`}>
				A currated list of notable projects I have worked most recently. Majority relate to full-stack web
				development or software architecutre. (Some github links may not be available as they are privated repos... working on publicizing them, demos are available however).
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

export default forwardRef(Projects);

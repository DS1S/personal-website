import Steps, { Step } from 'rc-steps';
import { useState } from 'react';
import { uid } from 'react-uid';
import styles from './Experience.module.css';

export default function Experience() {
	const [ currentStep, setStep ] = useState(0);

	const steps = {
		1: 'RBC Cybersecurity Analyst',
		2: 'RBC DevOps Engineer',
		3: 'Wish Software Engineer'
	};

	return (
		<div className={styles.experienceContainer}>
			<h2 className="section-title">Intern Experience</h2>
			<div className={styles.timelineContainer}>
				<Steps current={currentStep} type="navigation">
					{Object.values(steps).map((title, index) => (
						<Step
							className={styles.step}
							status={index !== currentStep ? 'wait' : 'process'}
							title={title}
							onClick={() => setStep(index)}
							key={uid(title)}
						/>
					))}
				</Steps>
			</div>
		</div>
	);
}

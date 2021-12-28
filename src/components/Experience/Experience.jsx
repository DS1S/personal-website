import { useRef, useState } from 'react';
import { uid } from 'react-uid';

import Steps, { Step } from 'rc-steps';
import Slider from 'react-slick';

import styles from './Experience.module.css';
import ExperienceContent from './ExperienceContent/ExperienceContent';
import rbcImg from '../../assets/images/companies/rbc.png';
import wishImg from '../../assets/images/companies/wish.png';

const stepsData = {
	1: {
		company: 'RBC',
		roleTitle: 'Cybersecurity Analyst',
		startDate: 'May 2020',
		endDate: 'Aug 2020',
		contentBlocks: [
			'Lead proposal of automating firewall rule Staging and change record automation. Performed design and documentation of concept documents.',
			'Lead development on a standalone web application using Flask to consume internal API gateways for automated firewall rule changes. Increased overall time efficiency and reduced time spent on tickets by analysts.'
		],
		imgSrc: rbcImg
	},
	2: {
		company: 'RBC',
		roleTitle: 'DevOps Engineer',
		startDate: 'May 2021',
		endDate: 'Aug 2021',
		contentBlocks: [
			'Developed and deployed API endpoints utilizing FastAPI for our Checkpoint firewall microservice used with global cyber security for automation tasks.',
			'Extensive involvement in Firewall Rule Attestation project. Developed python scripts to generate XML campaign files for 12,000 rules consuming hit counts for rules against firewall logs with 50m+ records/10Gb in 2 minutes.',
			'Automated end-to-end workflow of firewall rule attestation, saving $900k yearly by reducing need for contractors.'
		],
		imgSrc: rbcImg
	},
	3: {
		company: 'Wish',
		roleTitle: 'Software Engineer',
		startDate: 'January 2022',
		endDate: 'April 2022',
		contentBlocks: [ 'Current internship, working in the market and logistics team.' ],
		imgSrc: wishImg
	}
};

export default function Experience() {
	const [ currentStep, setStep ] = useState(0);
	const [ hasSlide, setHasSlide ] = useState(true);
	const sliderRef = useRef(null);

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		touchMove: false,
		arrows: false,
		beforeChange: (current, next) => {
			setHasSlide(false);
			setTimeout(setHasSlide(true), 470);
		}
	};

	const handleTimelineClick = (index) => {
		if (currentStep !== index && hasSlide) {
			sliderRef.current.slickGoTo(index);
			setStep(index);
		}
	};

	return (
		<div className={styles.experienceContainer}>
			<h2 className="section-title">Intern Experience</h2>
			<div className={styles.timelineContainer}>
				<Steps current={currentStep} type="navigation">
					{Object.values(stepsData).map((jobInfo, index) => (
						<Step
							className={styles.step}
							status={index !== currentStep ? 'wait' : 'process'}
							title={jobInfo.roleTitle}
							description={jobInfo.company}
							onClick={() => handleTimelineClick(index)}
							key={uid(index)}
						/>
					))}
				</Steps>
			</div>
			<div className={styles.slider}>
				<Slider ref={sliderRef} {...settings}>
					{Object.values(stepsData).map((jobInfo, index) => (
						<div className={styles.experienceBlob} key={uid(index)}>
							<ExperienceContent {...jobInfo} />
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
}

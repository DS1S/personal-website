import { useRef } from 'react';
import { useIntersection } from './hooks/useIntersection';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';

import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import Hero from './components/Hero/Hero';
import NavBar from './components/Navbar/Navbar';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

library.add(fab, faGithub, faLinkedin, faEnvelope);
AOS.init({ startEvent: 'load' });

function App() {
	const heroRef = useRef();
	const experienceRef = useRef();
	const projectsRef = useRef();

	const heroVisible = useIntersection(heroRef, '-400px');
	const experienceVisible = useIntersection(experienceRef, '-400px');
	const projectsVisibile = useIntersection(projectsRef, '-400px');

	return (
		<div id="profile">
			<NavBar visibilities={[ heroVisible, experienceVisible, projectsVisibile ]} />
			<Hero ref={heroRef} />
			<Experience ref={experienceRef} />
			<Projects ref={projectsRef} />
         <Footer />
		</div>
	);
}

export default App;

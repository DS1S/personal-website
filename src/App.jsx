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

library.add(fab, faGithub, faLinkedin, faEnvelope);
AOS.init({startEvent: 'load'});

function App() {
	return (
		<div id='profile'>
      <NavBar />
      <Hero />
      <Experience />
      <Projects />
		</div>
	);
}

export default App;

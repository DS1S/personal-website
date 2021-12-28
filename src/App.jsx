import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
		<div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <NavBar />
            <Hero />
            <Experience />
            <Projects />
          </Route>
          <Route path="/profile" component={Hero} />
          <Route path="/experience" component={Experience} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Router>
		</div>
	);
}

export default App;

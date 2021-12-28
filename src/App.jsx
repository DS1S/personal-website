import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/Navbar";
import Experience from "./components/Experience/Experience";

library.add(fab, faGithub, faLinkedin, faEnvelope)

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Experience />
    </div>
  );
}

export default App;

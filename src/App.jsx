import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/Navbar";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faGithub, faLinkedin, faEnvelope)

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;

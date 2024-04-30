
import './App.css';
import NavBar from './components/navbar/navbar.component';
import Banner from './components/banner/banner.component';
import Skills from './components/skills/skills.component';
import Projects from './components/projects/projects.component';
import Contact from './components/contact/contact.component';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;

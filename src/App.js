import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar.component';
import Banner from './components/banner/banner.component';
import Skills from './components/skills/skills.component';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <Skills/>
    </div>
  );
}

export default App;

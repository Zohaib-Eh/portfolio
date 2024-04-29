import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar.component';
import Banner from './components/banner/banner.component';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
    </div>
  );
}

export default App;

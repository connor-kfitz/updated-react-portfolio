import Nav from './components/nav'
import Header from './views/header';
import About from './views/about';
import Projects from './views/projects';

import './App.css';
import './styles/main.scss';

function App() {
  return (
    <div className='App'>
      <main className='main'>
        <Nav/>
        <Header/>
        <About/>
        <Projects/>
      </main>
    </div>
  );
}

export default App;

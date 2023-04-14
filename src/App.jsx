import Nav from './components/nav'
import Header from './views/header';
import About from './views/about';
import Projects from './views/projects';
import Contact from './views/contact';
import Footer from './views/footer';

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
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;

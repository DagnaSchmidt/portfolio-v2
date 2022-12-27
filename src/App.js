import React from 'react';
import About from './components/About';
import BtnLinks from './components/BtnLinks';
import Contact from './components/Contact';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Work from './components/Work';
import './styles/index.css';

function App() {
  const [mode, setMode] = React.useState(false)
  function toggle() {
    setMode(!mode)
  }
  return (
    <div className={`app ${mode && "grey-mode"}`}>
        <header className='header'>
            <h1 className='header__logo'>
                dagna schmidt
            </h1>
            <button className='btn-round header__btn' id='mode-btn' onClick={toggle}>
                {mode ? <i className='fa-solid fa-sun'></i> : <i className="fa-solid fa-moon"></i>}
            </button>
            <div className='header__btns'>
                <BtnLinks
                    link="https://www.instagram.com/b.ardzo/"
                    logo="fa-brands fa-instagram"
                />
                <BtnLinks
                    link="https://github.com/DagnaSchmidt"
                    logo="fa-brands fa-github"
                />
                <BtnLinks
                    link="https://www.linkedin.com/in/dagna-schmidt-90ba37207/"
                    logo="fa-brands fa-linkedin"
                />
            </div>
            <div className='header__sections'>
                <About />
                <Skills />
                <Education />
                <Work />
                <Portfolio />
                <Contact />
            </div> 
        </header>
    </div>
  );
}

export default App;

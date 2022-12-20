import React from 'react';
import BtnLinks from './components/BtnLinks';
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
        </header>
    </div>
  );
}

export default App;

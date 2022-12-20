import React from 'react';
import BtnLinks from './components/BtnLinks';
import './styles/index.css';

function App() {
  return (
    <div className="App">
        <header className='header'>
            <h1 className='header__logo'>
                dagna schmidt
            </h1>
            <button className="btn-round header__btn">
                <i className='fa-solid fa-moon'></i>
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

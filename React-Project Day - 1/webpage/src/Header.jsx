import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header className="p-2">
      <nav className="navbar navbar-expand-lg container">
        <a className="navbar-brand" href="#">
          <img src="https://sk27gym.com/images/logo.png" alt="Logo" style={{ marginTop: '10px' }} />
        </a>
        <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto text-center">
            <li className="nav-item">
              <a className="nav-link active" href="#" style={{ color: 'white' }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white' }}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: 'white' }}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

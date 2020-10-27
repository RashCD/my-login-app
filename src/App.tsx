import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="text-center">
      <header className="pointer-events-none" style={{ height: '40vmin' }}>
        <img
          src={logo}
          className="flex flex-col items-center justify-center bg-blue-800 text-white text-bas relative"
          alt="logo"
        />
        <div className="absolute bottom-0 left-0 right-0">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="text-blue-300"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;

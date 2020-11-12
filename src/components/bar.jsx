import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Bar() {
  return (
      <nav 
        className="bar fixed-top w-100 bg-dark px-5 d-flex 
            justify-content-between align-items-center">
        <Link
            className="btn btn-light"
            to='/'
        >Início</Link>
        <div>

            <a 
                href="http://kelsonteixeira.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light mr-4"
            >Kelson</a>
            <a 
                href="https://www.youtube.com/channel/UCAVTi5tHFHCygfp287hVmZg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light"
            >Youtube</a>
        </div>
      </nav>
  );
}

export default Bar;
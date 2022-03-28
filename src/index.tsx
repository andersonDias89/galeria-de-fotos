import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyled from './Global/globalStyled'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyled />
  </React.StrictMode>,
  document.getElementById('root')
);


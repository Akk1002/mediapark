import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import Root from './root/root';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Root/>
  </Router>
);


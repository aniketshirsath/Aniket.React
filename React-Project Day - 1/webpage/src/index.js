import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createRoot } from 'react-dom/client';
import App from './App'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);
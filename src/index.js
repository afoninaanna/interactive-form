import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import questions from './questions.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App questions={questions}/>
);

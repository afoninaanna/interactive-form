import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import questions from './questions.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const MyContext = React.createContext();
root.render(
    <MyContext.Provider value={questions}>
        <App />
    </MyContext.Provider>
);

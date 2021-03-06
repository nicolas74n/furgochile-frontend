import React from 'react';
import ReactDOM from 'react-dom';
import {HelmetProvider} from "react-helmet-async";
import './index.css';
import '@fontsource/roboto';
import App from './App';





const AppHelmet = () => (
    <HelmetProvider>
        <App />
    </HelmetProvider>
)

ReactDOM.render(<AppHelmet />, document.getElementById('root'));

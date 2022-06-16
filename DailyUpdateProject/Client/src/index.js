import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Popper from 'popper.js'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './components/store/auth-context';


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(

    <AuthContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthContextProvider>,

    document.getElementById('root')
);

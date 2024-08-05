import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

// import Store from './Store.jsx';
// import { Provider } from 'react-redux';
import ColorContext from './ColorContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
    <ColorContext>
     <App /> 
    </ColorContext>
       

               
)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { QueryClientProvider, QueryClient } from "react-query"
const clint=new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <QueryClientProvider client={clint}>
     
        <App />
      
    </QueryClientProvider>
  </HashRouter>
);


reportWebVitals();

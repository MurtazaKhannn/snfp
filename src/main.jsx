import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import HomeContext from './utils/HomeContext.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HomeContext>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </HomeContext>
)


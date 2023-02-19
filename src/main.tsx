import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/style.css'
import './i18n/index'

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

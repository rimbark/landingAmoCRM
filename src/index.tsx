import 'fonts/Orbitron-Regular.ttf'
import './styles/variables/global.scss'
import { App } from 'app/App'
import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

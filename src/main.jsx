import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Inicial from './Inicial.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Inicial />
  </StrictMode>,
)
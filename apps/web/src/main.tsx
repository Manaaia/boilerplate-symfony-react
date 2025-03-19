import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const domElement = document.getElementById('root')

if (domElement) {
  const root = createRoot(domElement)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

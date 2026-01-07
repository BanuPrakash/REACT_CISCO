import { createRoot } from 'react-dom/client'
// import './index.css' // css-loader
import App from './App.jsx' // ESM module system babel-loader

createRoot(document.getElementById('root')).render(<App />)

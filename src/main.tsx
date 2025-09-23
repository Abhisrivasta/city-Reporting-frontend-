import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router"
import App from './App.tsx'
import { ThemeProvider } from './components/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ThemeProvider>
)

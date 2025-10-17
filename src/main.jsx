import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import StudentProvider from './contexts/StudentContext'
import ThemeProvider from './contexts/ThemeContext'
createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <StudentProvider>
            <App />
        </StudentProvider>
    </ThemeProvider>
)

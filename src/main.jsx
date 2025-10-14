import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import StudentProvider  from './contexts/StudentContext'
createRoot(document.getElementById('root')).render(
    <StudentProvider >
        <App />
    </StudentProvider>
)

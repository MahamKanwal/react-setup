import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import UserProvider from './contexts/UserContext'
import ThemeProvider from './contexts/ThemeContext'
createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <UserProvider>
            <App />
        </UserProvider>
    </ThemeProvider>
)

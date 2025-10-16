import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App"
import StudentProvider from './contexts/StudentContext'
import ProductContextProvider from './contexts/ProductContext'
createRoot(document.getElementById('root')).render(
    <StudentProvider>
        <ProductContextProvider>
        <App />
        </ProductContextProvider>
    </StudentProvider>
)

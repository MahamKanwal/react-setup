import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import UserProvider from "./contexts/UserContext";
import ThemeProvider from "./contexts/ThemeContext";
import ProductProvider from "./contexts/ProductContext";
import StudentProvider from "./contexts/StudentContext";
createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <UserProvider>
      <ProductProvider>
        <StudentProvider>
          <App />
        </StudentProvider>
      </ProductProvider>
    </UserProvider>
  </ThemeProvider>
);

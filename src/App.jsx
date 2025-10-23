import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import TopBar from "./components/TopBar";
import Users from "./pages/Users";
import Products from "./pages/Products";

const App = () => {
  return (
    <div className="min-h-screen bg-black/50 dark:bg-black/90 dark:text-white">
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

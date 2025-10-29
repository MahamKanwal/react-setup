import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import TopBar from "./components/TopBar";
import Products from "./pages/Products";
import ProductForm from "./components/ProductForm";
import UserForm from "./components/UserForm";
import Users from "./pages/Users";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-black/50 dark:bg-black/90 dark:text-white">
      <Router>
  <TopBar />
  <Routes>
    <Route path="/" element={<Users />}>
    <Route path="create" element={<UserForm />} />
    </Route>
    <Route path="/counter" element={<Counter />} />
    <Route path="/products" element={<Products />}>
      <Route path="create" element={<ProductForm />} />
    </Route>
  </Routes>
</Router>
    </div>
  );
};

export default App;

// const nums = [4, 1, 10, 2];
// nums.sort((a,b) => a-b); 
// console.log(nums);

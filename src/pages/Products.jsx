import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  
  return (
    <div>

      <NavLink to="/products/create"
        className="px-2 py-2 bg-gray-100 rounded-lg mt-2 block ms-auto"
      >
        Add Products
      </NavLink>
     <Outlet/>
    </div>
  );
};

export default Products;

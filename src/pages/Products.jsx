import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  
  return (
    <div className="mt-4">

      <NavLink to="/products/create"
        className="px-4 py-2 bg-gray-100 text-black rounded-lg mr-auto font-medium"
      >
        Add Products
      </NavLink>
     <Outlet/>
    </div>
  );
};

export default Products;

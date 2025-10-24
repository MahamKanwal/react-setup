import React, { useState } from "react";
import Drawer from "../components/Drawer";
import FormGenerator from "../components/formGenerator";
// import {
//   FaDollarSign,
//   FaFile,
//   FaListCheck,
//   FaXmark,
//   FaLayerGroup,
// } from "react-icons/fa6";
// import { CiDiscount1 } from "react-icons/ci";
// import { FaShoppingBag } from "react-icons/fa";

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

const productFormFields = [
{},
]

  return (
    <div>
      <Drawer
        title="Add Product"
        // size="400px"
        isOpen={isOpen}
        onClose={toggleDrawer}
      >
      <FormGenerator fields={productFormFields}/>
        {/* <form className="flex-1 space-y-4">
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <FaShoppingBag className="text-blue-700" /> Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              className="mt-1 rounded-lg p-2 w-full border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-red-700 text-sm" data-error="name"></div>
          </div>


          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <FaDollarSign className="text-green-700" /> Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              className="mt-1 rounded-lg p-2 w-full border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-red-700 text-sm" data-error="price"></div>
          </div>

          
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <CiDiscount1 className="text-pink-700" /> Discount
            </label>
            <input
              type="number"
              name="discount"
              placeholder="Enter discount (%)"
              className="mt-1 rounded-lg p-2 w-full border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-red-700 text-sm" data-error="discount"></div>
          </div>


          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <FaListCheck className="text-orange-700" /> Brand
            </label>
            <select
              name="brand"
              className="mt-1 py-2 px-3 border border-blue-800 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Brand</option>
              <option value="nike">Nike</option>
              <option value="adidas">Adidas</option>
              <option value="samsung">Samsung</option>
              <option value="apple">Apple</option>
              <option value="sony">Sony</option>
            </select>
            <div className="text-red-700 text-sm" data-error="brand"></div>
          </div>

    
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <FaLayerGroup className="text-purple-700" /> Category
            </label>
            <select
              name="category"
              className="mt-1 py-2 px-3 border border-blue-800 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="footwear">Footwear</option>
              <option value="beauty">Beauty & Personal Care</option>
              <option value="books">Books and Stationery</option>
            </select>
            <div className="text-red-700 text-sm" data-error="category"></div>
          </div>

        
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-gray-700 font-medium">
              <FaFile className="text-gray-700" /> Upload Picture
            </label>
            <input
              type="file"
              name="file"
              className="mt-1 rounded-lg p-2 w-full border border-blue-800 focus:outline-none"
            />

        
            <div className="flex justify-center items-center border border-gray-300 w-20 h-16 rounded-md hidden">
              <div className="w-5 h-5 border-2 border-transparent border-t-indigo-600 rounded-full animate-spin"></div>
            </div>

         
            <div
              className="h-16 w-20 relative rounded-md hidden overflow-hidden mt-2"
              name="previewImg"
            >
              <img
                src=""
                alt="product_picture"
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                className="absolute top-0 right-0 bg-black/60 text-white text-xs p-1 rounded-bl-md"
              >
                <FaXmark />
              </button>
            </div>
          </div>
        </form> */}
      </Drawer>

<button onClick={toggleDrawer}>Add Products</button>

    </div>
  );
};

export default Products;

import React, { useState } from "react";
import Drawer from "../components/Drawer";
import FormGenerator from "../components/formGenerator";
import { IoMdAdd } from "react-icons/io";
import { FaDollarSign, FaListCheck, FaLayerGroup } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { useProducts } from "../contexts/ProductContext";

const Products = () => {
  const [product, setProduct] = useState({
    product_name: "",
    price: "",
    category: "",
    brand: "",
  });
  const { addAndUpdateProduct } = useProducts();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const productFormFields = [
    { name: "product_name", icon: <FaShoppingBag />, required: true },
    { name: "price", icon: <FaDollarSign />, type: "number", required: true },
    {
      name: "category",
      icon: <FaLayerGroup />,
      type: "select",
      required: true,
      options: [
        "Electronics",
        "Clothing",
        "Footwear",
        "Beauty & Personal Care",
        "Books and Stationery",
      ],
    },
    {
      name: "brand",
      icon: <FaListCheck />,
      type: "select",
      required: true,
      options: ["Nike", "Adidas", "Samsung", "Apple", "Sony"],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    addAndUpdateProduct(product);
  };

  return (
    <div>
      <Drawer title="Add Product" isOpen={isOpen} onClose={toggleDrawer}>
        <FormGenerator
          fields={productFormFields}
          onSubmit={handleSubmit}
          values={product}
          setValues={setProduct}
        />
      </Drawer>

      <button
        onClick={toggleDrawer}
        className="px-4 py-2 bg-gray-100 rounded-lg mt-2 mr-auto block flex items-center"
      >
        <IoMdAdd className="text-xl" />
        Add Products
      </button>
    </div>
  );
};

export default Products;

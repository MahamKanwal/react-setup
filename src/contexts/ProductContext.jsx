import { useState, createContext, useContext, useEffect } from "react";
import api from "../Api";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addAndUpdateProduct = async (newProduct) => {
    // if (editUser) {
    //   const product = await api.userApi.updateUser(newUser);
    //   if (!user) return;
    //   const updateUsers = users.map((oldUser) =>
    //     oldUser.id == editUser.id ? user : oldUser
    //   );
    //   setUsers(updateUsers);
    //   setEditUser(null);
    // } else {
    const newProductWithId = { ...newProduct, id: String(products.length + 1) };
    const product = await api.productApi.createProduct(newProductWithId);
    if (!product) return;
    setProducts([...products, product]);
    // }
  };

  const fetchAllProducts = async () => {
    const products = await api.productApi.getAllProducts();
    if (!products) return;
    setProducts(products);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const productContextValue = {
    products,
    addAndUpdateProduct,
  };

  return (
    <ProductContext.Provider value={productContextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProducts = () => useContext(ProductContext);

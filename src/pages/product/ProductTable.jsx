import DynamicTable from "../../components/DynamicTable";
import { useProducts } from "../../contexts/ProductContext";

const ProductTable = () => {
  const { products } = useProducts();
  const productTableColumns = ["product_name", "category", "brand", "price"];
  return (
    <>
      <DynamicTable columns={productTableColumns} data={products} />
    </>
  );
};

export default ProductTable;

import { FaSearch, FaSort, FaTrash } from "react-icons/fa";
import { FaRotateRight, FaPenToSquare } from "react-icons/fa6";
import DynamicTable from "../../components/DynamicTable";
import { useProducts } from "../../contexts/ProductContext";

const ProductTable = () => {
  const { products } = useProducts();
  const productTableColumns = ["product_name", "category", "brand", "price"]
  return (
    <>
      {/* <div className="rounded-lg p-5 shadow mb-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FaSearch className="text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search poducts by name,brand or category..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-2"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg w-full">
              <option value="">All Categories</option>
              <option value="clothing">Clothing</option>
              <option value="footwear">Footwear</option>
              <option value="electronics">Electronics</option>
              <option value="beauty & personal care">
                Beauty & Personal Care
              </option>
              <option value="books and stationery">Books and Stationery</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg w-full">
              <option value="">All Brands</option>
              <option value="nike">Nike</option>
              <option value="adidas">Adidas</option>
              <option value="samsung">Samsung</option>
              <option value="apple">Apple</option>
              <option value="sony">Sony</option>
            </select>
            <button className="px-4 py-2 bg-gray-100 rounded-lg flex items-center">
              <FaRotateRight />
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr className="">
              <th className="text-xs font-medium text-gray-400 px-6 py-3 text-left">
                <span className="flex items-center gap-1">
                  PRODUCT <FaSort />
                </span>
              </th>
              <th className="text-xs font-medium text-gray-400 px-6 py-3 text-left">
                <span className="flex items-center gap-1">
                  CATEGORY <FaSort />
                </span>
              </th>
              <th className="text-xs font-medium text-gray-400 hover:bg-gray-100 px-6 py-3 text-left">
                <span className="flex items-center gap-1">
                  BRAND <FaSort />
                </span>
              </th>
              <th className="text-xs font-medium text-gray-400 px-6 py-3 text-left">
                <span className="flex items-center gap-1">
                  PRICE <FaSort />
                </span>
              </th>
              <th className="text-xs font-medium text-gray-400 px-6 py-3 text-left">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
            <td className="px-6 py-4">
              <div>
                <h2 className="text-sm font-bold capitalize">Mobile</h2>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="text-sm text-black-900 font-light">
                Category:Electronics
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="text-sm text-gray-900 font-light capitalize">
                Brand:Smasong
              </div>
            </td>
            <td className="px-6 py-4 capitalize">
              <div className="text-sm text-gray-900 font-light capitalize">
                Price:25000
              </div>
            </td>
            <td className="px-8 py-4 text-sm space-x-3">
              <button>
                <FaPenToSquare className="text-blue-600" />
              </button>
              <button>
                <FaTrash className="text-red-600" />
              </button>
            </td>
            </tr>
          </tbody>
        </table>

        <div className="px-4 py-2 flex items-center justify-between border-t border-gray-300">
          <div>
            <p className="text-sm text-black-400">
              Showing
              <span className="font-medium">0</span>
              to
              <span className="font-medium">0</span>
              of
              <span className="font-medium">0</span>
              results
            </p>
          </div>
          <div className="flex row rounded-md shadow-sm">
            <button className="items-center px-4 py-2 border-gray-200 border text-sm font-medium text-black-500">
              Previous
            </button>
            <div className="flex" id="pageBtns">
              <button className="px-3 border">1</button>
            </div>
            <button className="items-center px-4 py-2 border-gray-200 border text-sm font-medium text=black-500">
              Next
            </button>
          </div>
        </div>
      </div> */}
      <DynamicTable columns={productTableColumns} data={products} />
    </>
  );
};

export default ProductTable;

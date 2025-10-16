import Counter from "./components/Counter";
import StudentForm from "./components/StudentForm";
import TableData from "./components/TableData";
import { useProducts } from "./contexts/ProductContext";

const App = () => {
  const f = useProducts();
console.log(f)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black/50">
      {/* <Counter/> */}
      <StudentForm/>
      <TableData />
    </div>
  );
};

export default App;

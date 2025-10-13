import Counter from "./components/Counter";
import TableData from "./components/TableData";

const App = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* <Counter/> */}
      <TableData />
    </div>
  );
};

export default App;

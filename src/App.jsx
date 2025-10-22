import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import TableData from "./components/TableData";
import TopBar from "./components/TopBar";

const App = () => {
  return (
    <div className="min-h-screen bg-black/50 dark:bg-black/90 dark:text-white">
      {/* <Counter/> */}
      <TopBar />
      <div className=" flex flex-col items-center justify-center min-h-[calc(100vh-65px)]">
        <UserForm />
        <TableData />
      </div>
    </div>
  );
};

export default App;

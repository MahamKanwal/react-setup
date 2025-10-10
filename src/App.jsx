import { useState } from "react";
import BtnsBar from "./components/BtnsBar";


const App = () => {

  const [count, setCount] = useState(0);


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="backdrop-blur-md bg-white/10 p-10 rounded-3xl shadow-2xl text-center w-96">
        <BtnsBar count={count} setCount={setCount } />
      </div>
      <p className="mt-10 text-lg opacity-80">Built with 💙 React + Tailwind CSS</p>
    </div>
  );
};

export default App;

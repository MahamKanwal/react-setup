import { useState } from "react";



const App = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  }
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  const reset = () => {
    setCount(0)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="backdrop-blur-md bg-white/10 p-10 rounded-3xl shadow-2xl text-center w-96">
        <h1 className="text-4xl font-bold mb-6 drop-shadow-lg">✨ Counter App ✨</h1>
        <div className="text-6xl font-extrabold mb-6">{count}</div>

        <div className="flex justify-center gap-4">
          <button
            onClick={decrease}
            className="px-5 py-2 bg-red-500 hover:bg-red-600 active:scale-95 rounded-lg font-semibold transition-all"
          >
            −
          </button>
          <button
            onClick={reset}
            className="px-5 py-2 bg-gray-400 hover:bg-gray-500 active:scale-95 rounded-lg font-semibold transition-all"
          >
            Reset
          </button>
          <button
            onClick={increase}
            className="px-5 py-2 bg-green-500 hover:bg-green-600 active:scale-95 rounded-lg font-semibold transition-all"
          >
            +
          </button>
        </div>
      </div>
      <p className="mt-10 text-lg opacity-80">Built with 💙 React + Tailwind CSS</p>
    </div>
  );
};

export default App;

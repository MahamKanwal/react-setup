import { useState } from "react";
import BtnsBar from "./BtnsBar";
import CounterCard from "./CounterCard";

const triggerMeInsideBtnsBar = (info) => {
  console.log(info);
};
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="backdrop-blur-md bg-white/10 p-10 rounded-3xl shadow-2xl text-center w-96">
        <CounterCard count={count} />
        <BtnsBar
          setCount={setCount}
          triggerMeInsideBtnsBar={triggerMeInsideBtnsBar}
        />
      </div>
      <p className="mt-10 text-lg opacity-80">
        Built with 💙 React + Tailwind CSS {count}
      </p>
    </>
  );
};

export default Counter;

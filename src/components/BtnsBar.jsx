import React, { Children } from 'react'
import CounterCard from './CounterCard'
const BtnsBar = ({ count, setCount }) => {
    const increase = () => {
        setCount(count + 1)
        setCount(count + 1)
        console.log(count)
    }
    const decrease = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const reset = () => {
        setCount(0)
    }




    return (
        <>
            <CounterCard count={count} />
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
        </>
    )
}

export default BtnsBar

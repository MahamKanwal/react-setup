const BtnsBar = ({ setCount, triggerMeInsideBtnsBar }) => {

    const increase = () => {
        setCount(p => p + 1);
    }
    const decrease = () => {
        setCount(p => p > 0 ? p - 1 : 0);
    }
    const reset = () => {
        triggerMeInsideBtnsBar("reset kya gya count ko");
        setCount(0)
    }

    return (
        <>
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

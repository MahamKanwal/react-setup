import React from 'react'

const CounterCard = ({count}) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 drop-shadow-lg">✨ Counter App ✨</h1>
      <div className="text-6xl font-extrabold mb-6">{count}</div>
    </>
  )
}

export default CounterCard

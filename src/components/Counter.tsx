'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <button
          onClick={handleDecrement}
          className="px-4 py-2 text-lg font-semibold bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          -
        </button>
        <span className="text-2xl font-bold min-w-[60px] text-center">{count}</span>
        <button
          onClick={handleIncrement}
          className="px-4 py-2 text-lg font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          +
        </button>
      </div>
      <button
        onClick={handleReset}
        className="px-4 py-2 text-sm font-semibold bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
      >
        Reset
      </button>
    </div>
  );
}
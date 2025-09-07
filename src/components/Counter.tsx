'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setCount(count - 1)}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors"
      >
        -
      </button>
      <span className="text-xl font-semibold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors"
      >
        +
      </button>
      <button
        onClick={() => setCount(0)}
        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
      >
        Reset
      </button>
    </div>
  );
}
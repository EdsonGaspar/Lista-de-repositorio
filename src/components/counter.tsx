import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <section>
      <h2>Contador</h2>
      <p className="text-xl font-bold">{count}</p>
      <button
        className="border rounded-lg px-2 py-1 bg-green-400 border-green-300 text-white cursor-pointer hover:text-lg transition-all duration-300"
        onClick={handleCount}
      >
        Contar
      </button>
    </section>
  );
}

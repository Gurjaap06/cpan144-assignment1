"use client";

import { useState } from "react";

type CounterCardProps = {
  title: string;
  startingValue: number;
};

export default function CounterCard({
  title,
  startingValue,
}: CounterCardProps) {
  // State stores the current count
  const [count, setCount] = useState(startingValue);

  // Event handlers update the state
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(startingValue);
  };

  return (
    <div className="card">
      <h2>{title}</h2>

      <div className="counter">{count}</div>

      <div className="buttonGroup">
        <button onClick={decrement}>-1</button>

        <button onClick={reset} className="secondaryButton">
          Reset
        </button>

        <button onClick={increment}>+1</button>
      </div>

      {/* Conditional rendering based on count */}
      {count > 5 && (
        <p className="message success">
          Great! Your count is greater than 5.
        </p>
      )}

      {count < 0 && (
        <p className="message error">
          Your count is below zero.
        </p>
      )}
    </div>
  );
}
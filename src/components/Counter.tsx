import React from 'react';
interface props {
  increment: () => void;
  decrement: () => void;
  number: number;
}
const Counter: React.FunctionComponent<props> = ({
  increment,
  decrement,
  number,
}: props) => {
  return (
    <>
      <div>
        <span>current:</span> <span>current:{number}</span>
      </div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
};

export default Counter;

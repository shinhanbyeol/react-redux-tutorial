import React from 'react';

interface props {
  size: number;
  changeEvent: (size: number) => void;
}
const SizeChanger: React.FunctionComponent<props> = ({
  size,
  changeEvent,
}: props) => {
  return (
    <>
      <input
        type="number"
        value={size}
        onChange={(e) => changeEvent(Number(e.target.value))}
      />
    </>
  );
};

export default SizeChanger;

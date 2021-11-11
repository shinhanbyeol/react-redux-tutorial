import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//reducer
import { RootState } from '../reducer-modules';
// action
import {
  increment,
  decrement,
  changeSize,
} from '../reducer-modules/test-reducer/_action';
// components
import Counter from '../components/Counter';
import SizeChanger from '../components/SizeChanger';

const CounterContainer: React.FunctionComponent = () => {
  const state = useSelector((store: RootState) => ({ ...store.counter }));
  const dispatch = useDispatch();

  const incrementButton = () => {
    dispatch(increment(state.size));
  };

  const decrementButton = () => {
    dispatch(decrement(state.size));
  };

  const changeSizeButton = (size: number) => {
    dispatch(changeSize(size));
  };

  return (
    <>
      <Counter
        increment={incrementButton}
        decrement={decrementButton}
        number={state.currentNumber}
      />
      <SizeChanger size={state.size} changeEvent={changeSizeButton} />
    </>
  );
};

export default CounterContainer;

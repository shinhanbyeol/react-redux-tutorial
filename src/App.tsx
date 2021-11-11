import React from 'react';
import Style from './App.module.scss';
import CounterContainer from './container/CounterContainer';

function App(): JSX.Element {
  return (
    <div className={Style.App}>
      <h1>redux-tutorial</h1>
      <div>
        <CounterContainer />
      </div>
    </div>
  );
}

export default App;

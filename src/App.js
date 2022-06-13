import React from 'react';
import UseStateArray from './tutorial/1-useState/setup/3-useState-array';
import UseStateCounter from './tutorial/1-useState/setup/5-useState-counter';
import UseEffectBasics from './tutorial/2-useEffect/setup/1-useEffect-basics';
import UseEffectCleanup from './tutorial/2-useEffect/setup/2-useEffect-cleanup';
import UseEffectFetchData from './tutorial/2-useEffect/setup/3-useEffect-fetch-data';
import MultipleReturns from './tutorial/3-conditional-rendering/setup/1-multiple-returns';

function App() {
  
  return (
    <div className='container'>
      {/* useState
      <UseStateCounter/>
      <UseStateArray/> */}

      {/* useEffect
      <UseEffectBasics />
      <UseEffectCleanup />
      <UseEffectFetchData /> */}

      {/* conditional rendering */}
      <MultipleReturns />
    </div>
  )
}

export default App;
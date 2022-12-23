import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

import './App.css';
import Blockinfo from './components/Blockinfo';
import Form from './components/Form';
import Singletransaction from './components/Singletransaction';
import Transactions from './components/Transactions';
import { useGlobalContext } from './context';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.



// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface

function App() {
  // const [blockNumber, setBlockNumber] = useState();
  // console.log(settings["apiKey"])
  const { block, header, currstate, setcurrState } = useGlobalContext()

  const handleClick = (val) => {
      setcurrState(val)
  }
  useEffect(() => {
  }, []);
   
  return <div className="App">
    <Form />
    <div className='buttons'>
      <button onClick={() => handleClick(0)}>1</button>
      <button onClick={() => handleClick(1)}>2</button>
      <button onClick={() => handleClick(2)}>3</button>
    </div>
    <div className='header'>
      <h3>{header}</h3>
    </div>
    {
       currstate == 0 ? (block && <Blockinfo 
        difficulty = {block.difficulty}
          extraData = { block.extraData}
          gasLimit = { block.gasLimit }
          gasUsed = { block.gasUsed }
          hash = { block.hash }
          miner = { block.miner }
          nonce = { block.nonce }
          number = { block.number }
          parentHash = { block.parentHash }
          transactions = { block.transactions}/>) :
          (currstate == 1 ? <Transactions /> : <Singletransaction />)
    }

  </div>;
}

export default App;

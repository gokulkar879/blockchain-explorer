import React, { useEffect, useState } from 'react'

function Blockinfo({difficulty, extraData, gasLimit, gasUsed, hash, miner, nonce, number, parentHash, transactions}) {
  return (
    <div className='blockinfo'>
      <p><span>difficulty : </span>{difficulty}</p>
      <p><span>extraData : </span>{extraData}</p>
      <p><span>hash : </span>{hash}</p>
      <p><span>miner : </span>{miner}</p>
      <p><span>nonce : </span>{nonce}</p>
      <p><span>number : </span>{number}</p>
      <p><span>parentHash : </span>{parentHash}</p>
      <p><span>transactions : </span>Array({transactions.length})</p>
        
    </div>
  )
}

export default Blockinfo

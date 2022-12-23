import React from 'react'
import { useGlobalContext } from '../context'

function Transactions() {
    const {transactions, setTransaction, setcurrState} = useGlobalContext()
  
    const handleClick = (id) => {
        setcurrState(2)
       setTransaction(transactions[id])
    }

  return (
    <div className='transactions'>
        {
            transactions.map((transaction, id) => {
                const txn_hash = transaction.hash;

                return <div key={txn_hash} className="transaction" onClick={() => handleClick(id)}>
                    <p><span>txn_hash : </span>{txn_hash}</p>
                </div>
            })
        }
    </div>
  )
}

export default Transactions
import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

function Singletransaction() {
    const {transaction} = useGlobalContext()
    useEffect(() => {
        console.log(transaction)
    }, [transaction])
    if(!transaction) {
        console.log("p")
        return <div className='singletransaction'></div>
    }
  return (
    <div className='singletransaction'>
        {
            console.log(transaction)
        }
        <p><span>confirmations : </span>{transaction.confirmations}</p>
        <p><span>data : </span>{transaction.data}</p>
        <p><span>from : </span>{transaction.from}</p>
        <p><span>hash : </span>{transaction.hash}</p>
        <p><span>nonce : </span>{transaction.nonce}</p>
        <p><span>r : </span>{transaction.r}</p>
        <p><span>s : </span>{transaction.s}</p>
        <p><span>to : </span>{transaction.to}</p>
    </div>
  )
}

export default Singletransaction

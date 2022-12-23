import React, { useContext, useEffect, useState } from "react";
import { Alchemy, Network } from 'alchemy-sdk';

const helper = ["BLOCKINFO", "TRANSACTIONS", "TRANSACTIONINFO"]

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const AppContext = React.createContext()

const AppProvider = ({children}) => {
   const [blockNumber, setBlockNumber] = useState(16249511)
   const [block, setBlock] = useState(null)
   const [transactions, setTransactions] = useState([])
   const [transaction, setTransaction] = useState(null)
   const [currstate, setcurrState] = useState(0);
   const [header, setHeader] = useState("BLOCKINFO")

   const handleClick = async (e) => {
       e.preventDefault()
       const res = await alchemy.core.getBlockWithTransactions(blockNumber)
       console.log(res)
       setcurrState(0);
    setBlock(res)
    setTransactions(res.transactions)
    setTransaction(res.transactions.length ? res.transactions[0] : null)
    console.log(transaction)
   }

   useEffect(async () => {
       const res = await alchemy.core.getBlockWithTransactions(blockNumber)
       console.log(res)
       setBlock(res)
       setTransactions(res.transactions.slice(0, 50))
       setTransaction(res.transactions.length>0 ? res.transactions[0] : null)
       
   }, [])

   useEffect(() => {
       setHeader(helper[currstate])
   }, [currstate])
    return <AppContext.Provider value={{
        block,
        header,
        blockNumber,
        transactions,
        setBlockNumber,
        currstate,
        setcurrState,
        handleClick,
        setTransaction,
        transaction
    }}>
        {
            children
        }
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
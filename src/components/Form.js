import React from 'react'
import { useGlobalContext } from '../context'

function Form() {
    const { blockNumber, setBlockNumber, handleClick } = useGlobalContext()

  return (
    <div className='form'>
        <form>
            <label htmlFor='block' className='block-label'>Type a Block Number to get the details</label>
            <input 
            type="number"
            name="block"
            placeholder='type a block number'
            className='form-input'
            value={blockNumber}
            onChange={e => setBlockNumber(Number(e.target.value))}
            />
            <button className='btn' onClick={handleClick}>Send</button>
        </form>
    </div>
  )
}

export default Form
import React from 'react'

function TransactionSearch() {
  return (
    <div className='search-container'>
        <form>
            <input type='text' placeholder='Enter text to search' required />
            <button>search</button>
        </form>
    </div>
  )
}

export default TransactionSearch
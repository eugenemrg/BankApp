import React from 'react'

function TransactionSearch() {
  return (
    <div className='search-container' id='search'>
        <p id='search-title'>Transaction History</p>
        <form id='search-form'>
            <input type='text' placeholder='Enter text to search' required id='search-form-input' />
            <button id='search-form-submit'>search</button>
        </form>
    </div>
  )
}

export default TransactionSearch
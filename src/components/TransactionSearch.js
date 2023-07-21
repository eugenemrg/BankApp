import React from 'react'

function TransactionSearch() {
  return (
    <div className='search-container'>
        <div className='search-title-container'>
            <p className='search-title'>Transaction Search</p>
            <i className='search-title-logo'></i>
        </div>
        <form id='search-form'>
            <input type='text' placeholder='Enter text to search' required id='search-form-input' />
            <button id='search-form-submit'>search</button>
        </form>
    </div>
  )
}

export default TransactionSearch
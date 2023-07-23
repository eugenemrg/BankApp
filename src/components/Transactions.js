import React from 'react'
import TransactionSearch from './TransactionSearch'
import TransactionListTable from './TransactionListTable'

function Transactions({transactions, handleSearch, handleDelete, showSearchLoadingIcon}) {
    return (
        <>
            <TransactionSearch handleSearch={handleSearch} showSearchLoadingIcon={showSearchLoadingIcon}/>
            <TransactionListTable transactions={transactions} handleDelete={handleDelete}/>
        </>
    )
}

export default Transactions
import React from 'react'
import TransactionSearch from './TransactionSearch'
import TransactionListTable from './TransactionListTable'

function Transactions({transactions, handleDelete}) {
    return (
        <>
            <TransactionSearch />
            <TransactionListTable transactions={transactions} handleDelete={handleDelete}/>
        </>
    )
}

export default Transactions
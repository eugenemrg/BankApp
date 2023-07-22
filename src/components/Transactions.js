import React from 'react'
import TransactionSearch from './TransactionSearch'
import TransactionListTable from './TransactionListTable'

function Transactions({transactions}) {
    return (
        <>
            <TransactionSearch />
            <TransactionListTable transactions={transactions} />
        </>
    )
}

export default Transactions
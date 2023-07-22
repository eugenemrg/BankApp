import React from 'react'
import TransactionListTableHeader from './TransactionListTableHeader'
import TransactionListTableBody from './TransactionListTableBody'
import TransactionListTableRow from './TransactionListTableRow'

function TransactionListTable({transactions, handleDelete}) {

  const transactionsArray = transactions.map((transaction) => {
    return (
      <TransactionListTableRow key={transaction.id} date={transaction.date} description={transaction.description} category={transaction.category} amount={transaction.amount} >
        <td>
            <button onClick={() => handleDelete(transaction.id)}>Delete</button>
        </td>
      </TransactionListTableRow>
    )
  })

  return (
    <table id='transactions'>
      <TransactionListTableHeader />
      <TransactionListTableBody>
        {transactionsArray}
      </TransactionListTableBody>
    </table>
  )
}

export default TransactionListTable
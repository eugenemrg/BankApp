import React from 'react'
import TransactionListTableHeader from './TransactionListTableHeader'
import TransactionListTableBody from './TransactionListTableBody'

function TransactionListTable() {
  return (
    <table>
      <TransactionListTableHeader />
      <TransactionListTableBody />
    </table>
  )
}

export default TransactionListTable
import React from 'react'

function TransactionListTableRow({date, description, category, amount}) {
  return (
    <tr>
        <td>{date}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
        <td>
            <button>Delete</button>
        </td>
    </tr>
  )
}

export default TransactionListTableRow
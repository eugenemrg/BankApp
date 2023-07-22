import React from 'react'

function TransactionListTableRow({date, description, category, amount, handleDelete, id}) {

  function handleButtonClick() {
    handleDelete(id)
  }

  return (
    <tr>
        <td>{date}</td>
        <td>{description}</td>
        <td>{category}</td>
        <td>{amount}</td>
        <td>
            <button onClick={handleButtonClick}>Delete</button>
        </td>
    </tr>
  )
}

export default TransactionListTableRow
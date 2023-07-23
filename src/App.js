import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import Form from './components/Form';
import Transactions from './components/Transactions';
import headerNavigationItems from './data/headers';
import categories from './data/categories';

function App() {

  const [transactionsData, setTransactionsData] = useState([])
  const [transactionsDataPrimary, setTransactionsDataPrimary] = useState([])
  const [showSearchLoadingIcon, setShowSearchLoadingIcon] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3007/transactions')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setTransactionsData(data)
      setTransactionsDataPrimary(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  function handleTransactionDelete(transactionId) {
    const updatedTransactionsData = [...transactionsDataPrimary].filter(item => {
      return (item.id !== transactionId)
    })
    setTransactionsData(updatedTransactionsData)
    setTransactionsDataPrimary(updatedTransactionsData)
  }

  function handleSearch(searchQuery) {
    setShowSearchLoadingIcon(true)
    setTransactionsData([...transactionsDataPrimary].filter(item => {
      return (item.description.toLowerCase().includes(searchQuery.toLowerCase()))
    }))
    setShowSearchLoadingIcon(false)
  }

  function handleAddNewTransaction(transaction){
    fetch('http://localhost:3007/transactions', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      setTransactionsData([...transactionsDataPrimary, data])
      setTransactionsDataPrimary([...transactionsDataPrimary, data])
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <div className="App">
      <Header navItems={headerNavigationItems} />
      <Form categories={categories} addNewTransaction={handleAddNewTransaction} />
      <Transactions transactions={transactionsData} handleSearch={handleSearch} handleDelete={handleTransactionDelete} showSearchLoadingIcon={showSearchLoadingIcon} />
    </div>
  );
}

export default App;

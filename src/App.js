import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import Form from './components/Form';
import Transactions from './components/Transactions';
import headerNavigationItems from './data/headers';
import categories from './data/categories';

function App() {

  const [transactionsData, setTransactionsData] = useState([])
  const [showSearchLoadingIcon, setShowSearchLoadingIcon] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3007/transactions')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setTransactionsData(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  function handleTransactionDelete(transactionId) {
    setTransactionsData([...transactionsData].filter(item => {
      return (item.id !== transactionId)
    }))
  }

  function handleSearch(searchQuery) {
    setShowSearchLoadingIcon(true)
    setTransactionsData([...transactionsData].filter(item => {
      return (item.description.toLowerCase().includes(searchQuery.toLowerCase()))
    }))
    setShowSearchLoadingIcon(false)
  }

  return (
    <div className="App">
      <Header navItems={headerNavigationItems} />
      <Form categories={categories} />
      <Transactions transactions={transactionsData} handleSearch={handleSearch} handleDelete={handleTransactionDelete} showSearchLoadingIcon={showSearchLoadingIcon} />
    </div>
  );
}

export default App;

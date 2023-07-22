import React from 'react'
import Header from './components/Header';
import Form from './components/Form';
import Transactions from './components/Transactions';
import headerNavigationItems from './data/headers';

function App() {
  return (
    <div className="App">
      <Header navItems={headerNavigationItems} />
      <Form />
      <Transactions />
    </div>
  );
}

export default App;

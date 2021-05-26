import React from 'react'
import TableData from './component/TableData'
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <TableData/>
      <Footer />
    </div>
  );
}

export default App;

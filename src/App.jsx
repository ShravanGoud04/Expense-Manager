import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import BalanceSection from "./components/BalanceSection";
import ListGroup from "./components/ListGroup";

const App = () => {
const [transactions,setTransactions]=useState([])

const [edit,setEdit]=useState({
  transaction:{},
  isEdit:false
})

const dlteTransaction=(id)=>{
  setTransactions(transactions.filter((transaction)=> transaction.id !==id))

}

const saveTransaction=(newText,newAmount)=>{
  const newTransaction={
    id:crypto.randomUUID(),
    text:newText,
    amount:parseInt(newAmount)
  }
  // console.log(newTransaction);
  setTransactions([newTransaction,...transactions])

}

const editTransaction=(transactions)=>{
  // console.log(transactions);
  setEdit({
    transaction:transactions,
    isEdit:true
  })
}

const updateTransaction=(id,text,amount)=>{
  // console.log(text, id, amount);
  setTransactions(transactions.map((transact)=>(transact.id===id)?{...transact,text:text,amount:amount}:transact))
}

  

  return (
    <>
    
      <Navbar />
      <div className="container">
        <MainSection transactions={transactions} saveTransaction={saveTransaction} edit={edit} updateTransaction={updateTransaction} />
        <BalanceSection  transactions={transactions}/>
        <ListGroup  transactions={transactions} dlteTransaction={dlteTransaction} editTransaction={editTransaction} />
      </div>
    </>
  );
};

export default App;

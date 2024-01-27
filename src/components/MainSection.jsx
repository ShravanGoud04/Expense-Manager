import React, { useEffect, useState } from "react";

const MainSection = ({transactions,saveTransaction,edit,updateTransaction}) => {

  const balance =transactions.reduce((p,c)=>{
    return p+c.amount
  },0)
  // console.log(balance);

  const[text,setText]=useState('');
  const[amount,setAmount]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    if(edit.isEdit){
      updateTransaction(edit.transaction.id,text,amount)
    }else{
      saveTransaction(text,amount)
    }
    // if(edit.isEdit){
    //   updateTransaction(edit.transaction.id,text,amount)
    //   console.log(edit.transaction.id,text,amount);
      

    // }else{
    //   saveTransaction(text,amount)
    // }

    // saveTransaction(text,amount)
    setText('')
    setAmount('')


  }
  
  useEffect(() => {
    setText(edit.transaction.text)
    setAmount(edit.transaction.amount)


  }, [edit]);

  return (
    <div className="main-section">
      <div id="current-bal" className="balance">
        <span>
          <p>Current Balance</p>
          <h1>₹{balance}</h1>
        </span>
        <i className="fa-solid fa-wallet"></i>
      </div>

      <form className="transaction-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Transaction" onChange={(e)=>setText(e.target.value)} value={text}/>
        <input type="number" placeholder="Enter Amount" onChange={(e)=>setAmount(e.target.value)} value={amount} />
        <button>
          Save Transaction<i className="fa-solid fa-floppy-disk"></i>
        </button>
      </form>
    </div>
  );
};

export default MainSection;

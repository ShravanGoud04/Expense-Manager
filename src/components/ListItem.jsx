import React from "react";
import { FaTrash } from "react-icons/fa";

const ListItem = ({ transaction, dlteTransaction, editTransaction }) => {
  // console.log(transaction);
  return (
    <li className='list-item'>
      <span>
        <h3
          className={
            transaction.amount > 0
              ? "income-transaction"
              : "expense-transaction"
          }
        >
          ₹{transaction.amount}
        </h3>
        <h4>{transaction.text} </h4>
      </span>
      <button
        className='editbtn'
        onClick={() => editTransaction(transaction)}
      >
        Edit
      </button>
      <button
        className='delbtn'
        onClick={() => dlteTransaction(transaction.id)}
      >
        <FaTrash />
      </button>
    </li>
  );
};

export default ListItem;

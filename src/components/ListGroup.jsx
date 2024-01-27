import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({transactions,dlteTransaction,editTransaction}) => {
  return (
    <ul className="list-group">
      
        {
          transactions.map((transaction)=> <ListItem key={transaction.id} transaction={transaction} dlteTransaction={dlteTransaction} editTransaction={editTransaction} />)
        }
      
    </ul>
  );
};

export default ListGroup;

import React from "react";
import TransactionForm from "../components/TransactionForm";
import "../styles.css"; 


const AddTransaction = () => {
  return (
    <div>
      <h1 className="header">Add a new Transaction</h1>
      <TransactionForm />
    </div>
  );
};

export default AddTransaction;

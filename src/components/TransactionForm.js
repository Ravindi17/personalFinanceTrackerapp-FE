import React, { useState } from "react";
import { addIncome, addExpense } from "../api";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const TransactionForm = () => {
  const [type, setType] = useState("income");
  const [details, setDetails] = useState({ source: "", amount: "", date: "", category: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === "income") {
      await addIncome({ source: details.source, amount: details.amount, date: details.date });
    } else {
      await addExpense({ category: details.category, amount: details.amount, date: details.date });
    }
    navigate("/");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label >Type:</label>
      <select onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {type === "income" ? (
        <input type="text" placeholder="Source" onChange={(e) => setDetails({ ...details, source: e.target.value })} required />
      ) : (
        <input type="text" placeholder="Category" onChange={(e) => setDetails({ ...details, category: e.target.value })} required />
      )}

      <input type="number" placeholder="Amount" onChange={(e) => setDetails({ ...details, amount: e.target.value })} required />
      <input type="date" onChange={(e) => setDetails({ ...details, date: e.target.value })} required />
      <button className="button" type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;

"use client";
import { useState } from "react";
import  Card  from "./components/Card"
import { useExpenses } from "./components/ExpenseContext";
import AddExpensesModal from "./components/AddExpenseModal";
import ExpenseGraph from "./components/ExpenseGraph";
import TransactionList from "./components/TransactionList";
import "./global.css";

export default function App() {
  const { expenses } = useExpenses();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
  <div className="app-wrapper"> {/* Wrapper för att centrera på desktop */}
    <h1>SpendWise</h1>

    <Card
      label="Total Expenses"
      value={total}
      onAdd={() => setIsModalOpen(true)}
    />

    <div className="main-grid"> {/* Grid som aktiveras på stora skärmar */}
      <ExpenseGraph expenses={expenses}/>
      <TransactionList />
    </div>

    {isModalOpen && (
      <AddExpensesModal onClose={() => setIsModalOpen(false)} />
    )}
  </div>
);
}
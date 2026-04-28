"use client";
import { useState } from "react";
import Card from "./components/Card";
import { useExpenses } from "./components/ExpenseContext";
import AddExpensesModal from "./components/AddExpenseModal";
import ExpenseGraph from "./components/ExpenseGraph";
import TransactionList from "./components/TransactionList";
import "./global.css";

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export default function App() {
  const { expenses } = useExpenses();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(() => startOfMonth(new Date()));

  const monthExpenses = expenses.filter((expense) => {
    const date = new Date(expense.date);
    return (
      date.getFullYear() === selectedMonth.getFullYear() &&
      date.getMonth() === selectedMonth.getMonth()
    );
  });

  const total = monthExpenses.reduce((sum, e) => sum + e.amount, 0);

  const changeMonth = (offset) => {
    setSelectedMonth((prev) => startOfMonth(new Date(prev.getFullYear(), prev.getMonth() + offset, 1)));
  };

  const isCurrentMonth =
    selectedMonth.getFullYear() === new Date().getFullYear() &&
    selectedMonth.getMonth() === new Date().getMonth();

  return (
    <div className="app-wrapper"> {/* Wrapper för att centrera på desktop */}
      <h1>SpendWise</h1>

      <Card label="Total Expenses" value={total} onAdd={() => setIsModalOpen(true)} />

      <div className="main-grid"> {/* Grid som aktiveras på stora skärmar */}
        <ExpenseGraph
          expenses={monthExpenses}
          selectedMonth={selectedMonth}
          onMonthChange={changeMonth}
          isCurrentMonth={isCurrentMonth}
        />
        <TransactionList expenses={monthExpenses} />
      </div>

      {isModalOpen && <AddExpensesModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
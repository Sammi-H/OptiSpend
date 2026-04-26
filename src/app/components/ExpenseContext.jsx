"use client";
import { createContext, useContext, useState, useEffect, useRef } from "react";

const ExpenseContext = createContext();

export default function ExpensesProvider({ children }) {
  const [expenses, setExpenses] = useState([]);
  const isInitialMount = useRef(true);

 
  useEffect(() => {
    const saved = localStorage.getItem("expenses");
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setExpenses(JSON.parse(saved));
    }
  }, []);


  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [expenses]);

  const addExpense = (expense) => setExpenses((prev) => [...prev, expense]);
  const deleteExpense = (id) => setExpenses((prev) => prev.filter((e) => e.id !== id));

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpenses() {
  const context = useContext(ExpenseContext);
  if (!context) throw new Error("useExpenses must be used within ExpensesProvider");
  return context;
}
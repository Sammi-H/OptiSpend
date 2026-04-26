"use client";
import { useState } from "react";
import { useExpenses } from "./ExpenseContext";

export default function AddExpensesModal({ onClose }) {
  const { addExpense } = useExpenses();
    const [error, setError] = useState({});

  const [form, setForm] = useState({
    description: "",
    amount: "",
    category: "Shopping",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors ={};

    if(!form.description) newErrors.description ="Vänligen fyll i beskrivning";
    if(!form.amount) newErrors.amount ="Vänligen fyll i belopp";

    if(Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    addExpense({
      id: Date.now(),
      ...form,
      amount: Number(form.amount),
      date: new Date().toISOString(),
    });
    onClose();
  };

  const categories = [
    { key: "Mat", icon: "🍔" },
    { key: "Hem", icon: "🏠" },
    { key: "Nöje", icon: "🎮" },
    { key: "Transport", icon: "🚗" },
    { key: "Shopping", icon: "🛍️" },
    { key: "Övrigt", icon: "📦" },
  ];

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal-content" noValidate>
        <label>Lägg till utgift!</label>
        <br />
        <input
          name="description"
          placeholder="Beskrivning"
          onChange={handleChange}
          required
        />
        {error.description && <p style={{color:"red"}}>{error.description}</p>}

        <input
          name="amount"
          placeholder="Belopp(kr)"
          type="number"
          onChange={handleChange}
          required
        />
        {error.amount && <p style={{color:"red"}}>{error.amount}</p>}

        <div className="categories">
          {categories.map((c) => (
            <button
              key={c.key}
              type="button"
              className={form.category === c.key ? "cat active" : "cat"}
              onClick={() => setForm({ ...form, category: c.key })}
            >
              <span style={{ fontSize: "18px"}}>{c.icon}</span>
              <span>{c.key}</span>
            </button>
          ))}
        </div>
        <div className="button-container">
          <button type="submit">Spara</button>
          <button type="button" onClick={onClose}>
            Avbryt
          </button>
        </div>
      </form>
    </div>
  );
}

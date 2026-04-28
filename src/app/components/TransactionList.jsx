"use client";
import { useExpenses } from "./ExpenseContext";

export default function TransactionList({ expenses: propExpenses }) {
  const { expenses: contextExpenses, deleteExpense } = useExpenses();
  const expenses = propExpenses ?? contextExpenses;

  const categoryData = {
    Mat: { icon: "🍔", color: "#FF8042" },
    Hem: { icon: "🏠", color: "#0088FE" },
    Nöje: { icon: "🎮", color: "#00C49F" },
    Transport: { icon: "🚗", color: "#FFBB28" },
    Shopping: { icon: "🛍️", color: "#8884d8" },
    Övrigt: { icon: "📦", color: "#cccccc" },
  };

  const reversedExpenses = [...expenses].reverse();

  return (
    <div className="chart">
      <h3>Transactionlist</h3>

      <div className="transaction-container">
        {expenses.length === 0 && (
          <p className="empty-msg" style={{ textAlign: "center", color: "grey", padding: "10px" }}>
            Inga transaktioner för vald månad.
          </p>
        )}

        {reversedExpenses.map((item) => {
          const config = categoryData[item.category] || categoryData.Övrigt;

          return (
            <div key={item.id} className="transaction-item">
              <div className="item-left">
                <div className="icon-circle" style={{ backgroundColor: config.color }}>
                  {config.icon}
                </div>

                <div className="item-text">
                  <p className="item-description" style={{ color: "white" }}>
                    {item.description}
                  </p>
                  <p className="item-sub" style={{ fontSize: "0.78em", color: "white" }}>
                    {item.category} • {new Date(item.date).toLocaleDateString("sv-SE")}
                  </p>
                </div>
              </div>

              <div className="item-right">
                <p className="item-amount" style={{ color: "white" }}>
                  -{item.amount.toLocaleString("sv-SE")} kr
                </p>
                <button className="delete-btn" onClick={() => deleteExpense(item.id)}>
                  🗑️
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
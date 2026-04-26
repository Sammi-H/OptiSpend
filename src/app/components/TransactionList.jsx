"use client";
import { useExpenses } from "./ExpenseContext";

export default function TransactionList() {
  const { expenses, deleteExpense } = useExpenses();

  // 1. Inställningar för kategorier (Ikoner och färger)
  const categoryData = {
    Mat: { icon: "🍔", color: "#FF8042" },
    Hem: { icon: "🏠", color: "#0088FE" },
    Nöje: { icon: "🎮", color: "#00C49F" },
    Transport: { icon: "🚗", color: "#FFBB28" },
    Shopping: { icon: "🛍️", color: "#8884d8" },
    Övrigt: { icon: "📦", color: "#cccccc" },
  };

  // 2. Vänd på listan så de senaste visas först (Skapa en kopia med [...])
  const reversedExpenses = [...expenses].reverse();

  return (
    <div className="chart">
      <h3>Transactionlist</h3>
      
      <div className="transaction-container">
        {/* Om listan är tom, visa meddelande */}
        {expenses.length === 0 && (
          <p className="empty-msg" style={{ color: "grey", padding: "10px" }}>
            No transactions yet.
          </p>
        )}

        {/* Loopa igenom utgifterna */}
        {reversedExpenses.map((item) => {
          // Hämta rätt ikon/färg baserat på kategori
          const config = categoryData[item.category] || categoryData.Övrigt;

          return (
            <div key={item.id} className="transaction-item">
              
              <div className="item-left">
                {/* Ikon-cirkel */}
                <div className="icon-circle" style={{ backgroundColor: config.color }}>
                  {config.icon}
                </div>
                
                {/* Beskrivning och kategori */}
                <div className="item-text">
                  <p className="item-description" style={{ color: "white" }}>
                    {item.description}
                  </p>
                  <p className="item-sub" style={{ fontSize: "0.78em", color: "white" }}>
                    {item.category} • {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="item-right">
                {/* Beloppet */}
                <p className="item-amount" style={{color:"white"}}>
                  -{item.amount.toLocaleString("sv-SE")} kr
                </p>
                {/* Ta bort-knapp */}
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
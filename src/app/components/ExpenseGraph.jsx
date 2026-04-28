"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const categoryData = {
  Mat: { icon: "🍔", color: "#FF8042" },
  Hem: { icon: "🏠", color: "#0088FE" },
  Nöje: { icon: "🎮", color: "#00C49F" },
  Transport: { icon: "🚗", color: "#FFBB28" },
  Shopping: { icon: "🛍️", color: "#8884d8" },
  Övrigt: { icon: "📦", color: "#cccccc" },
};

const buttonBaseStyle = {
  backgroundColor: "#8884d8",
  color: "#ffffff",
  border: "none",
  borderRadius: "999px",
  padding: "10px 18px",
  fontWeight: 700,
  cursor: "pointer",
  minWidth: "120px",
};

const buttonDisabledStyle = {
  opacity: 0.5,
  cursor: "not-allowed",
};

function formatMonthLabel(month) {
  return month.toLocaleDateString("sv-SE", { month: "long", year: "numeric" });
}

export default function ExpenseGraph({ expenses, selectedMonth, onMonthChange, isCurrentMonth }) {
  const dailyData = expenses.reduce((acc, expense) => {
    const date = new Date(expense.date).toLocaleDateString("sv-SE");
    const category = expense.category;

    if (!acc[date]) acc[date] = { date };
    acc[date][category] = (acc[date][category] || 0) + expense.amount;
    return acc;
  }, {});

  const data = Object.values(dailyData);

  return (
    <div className="chart">
      <h3>Daily Expenses</h3>

      {data.length === 0 ? (
        <p style={{ color: "grey", textAlign: "center", padding: "20px" }}>
          Inga utgifter för vald månad.
        </p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barSize={7}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip formatter={(value) => `${value} kr`} />
            <Legend formatter={(value) => <span style={{ fontSize: "0.7em", color: "white" }}>{value}</span>} />
            {Object.entries(categoryData).map(([category, { color }]) => (
              <Bar key={category} dataKey={category} fill={color} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      )}

      <div style={{ marginTop: "18px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
        <button onClick={() => onMonthChange(-1)} style={buttonBaseStyle}>
          ← Föregående
        </button>

        <span style={{ fontWeight: 700, color: "white", minWidth: "140px", textAlign: "center" }}>
          {selectedMonth ? formatMonthLabel(selectedMonth) : "Vald månad"}
        </span>

        <button
          onClick={() => onMonthChange(1)}
          disabled={isCurrentMonth}
          style={{
            ...buttonBaseStyle,
            ...(isCurrentMonth ? buttonDisabledStyle : {}),
          }}
        >
          Nästa →
        </button>
      </div>
    </div>
  );
}
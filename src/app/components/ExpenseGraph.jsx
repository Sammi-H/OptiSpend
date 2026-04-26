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

export default function ExpenseGraph({ expenses }) {
  // Gruppera per datum och kategori
  const dailyData = expenses.reduce((acc, expense) => {
    const date = new Date(expense.date).toLocaleDateString("sv-SE");
    const category = expense.category;
    
    if (!acc[date]) acc[date] = { date };
    acc[date][category] = (acc[date][category] || 0) + expense.amount;
    return acc;
  }, {});

  const data = Object.values(dailyData);

  if (expenses.length === 0) {
    return (
      <div className="chart">
        <h3>Daily Expenses</h3>
        <p style={{ color: "grey", textAlign: "center", padding: "20px" }}>
          No expenses yet.
        </p>
      </div>
    );
  }

  return (
    <div className="chart">
      <h3>Daily Expenses</h3>
      <br></br>
      <br></br>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barSize={7}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip formatter={(value) => `${value} kr`} />
          <Legend formatter={(value) => <span style={{fontSize:"0.7em", color: "white" }}>{value}</span>} />
          {Object.entries(categoryData).map(([category, { color }]) => (
            <Bar key={category} dataKey={category} fill={color} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
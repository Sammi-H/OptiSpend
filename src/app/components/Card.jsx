"use client";

export default function Card({ label, value, onAdd }) {
  return (
    <div className="card">
      <p className="label">{label}</p>
      <div className="row">
        <p className="value">{value.toLocaleString("sv-SE")} SEK</p>
        <button className="btn" onClick={onAdd}>+</button>
      </div>
    </div>
  );
}

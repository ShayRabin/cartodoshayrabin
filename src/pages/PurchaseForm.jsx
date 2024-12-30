import React, { useState } from "react";

export default function PurchaseForm() {
  const [form, setForm] = useState({
    driverName: "",
    idNumber: "",
    birthDate: "",
    financing: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("טופס הרכישה הוגש בהצלחה!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "500px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>טופס רכישה</h2>
      <input
        type="text"
        name="driverName"
        placeholder="שם הנהג"
        value={form.driverName}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <input
        type="text"
        name="idNumber"
        placeholder="מספר רישיון או תעודת זהות"
        value={form.idNumber}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <input
        type="date"
        name="birthDate"
        value={form.birthDate}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <input
          type="checkbox"
          name="financing"
          checked={form.financing}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <label>צריך מימון?</label>
      </div>
      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          background: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        שלח טופס
      </button>
    </form>
  );
}

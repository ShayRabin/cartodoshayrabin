import React, { useState } from "react";

export default function AddCar({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    mileage: "",
    owner: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(form).every((value) => value);
    if (!isFormValid) {
      alert("אנא מלא את כל השדות");
      return;
    }
    onAdd({ ...form, id: Date.now() });
    alert("הרכב נוסף בהצלחה!");
    setForm({ name: "", price: "", mileage: "", owner: "", image: "" });
  };

  return (
    <form
      className="add-car-form"
      onSubmit={handleSubmit}
      style={{ maxWidth: "400px", margin: "auto" }}
    >
      <input
        type="text"
        name="name"
        placeholder="שם הרכב"
        value={form.name}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <input
        type="number"
        name="price"
        placeholder="מחיר"
        value={form.price}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <input
        type="number"
        name="mileage"
        placeholder="קילומטראז'"
        value={form.mileage}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <input
        type="text"
        name="owner"
        placeholder="בעלות (יד)"
        value={form.owner}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <input
        type="text"
        name="image"
        placeholder="כתובת תמונה"
        value={form.image}
        onChange={handleChange}
        style={{ display: "block", marginBottom: "10px", width: "100%" }}
      />
      <button
        type="submit"
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        הוסף רכב
      </button>
    </form>
  );
}

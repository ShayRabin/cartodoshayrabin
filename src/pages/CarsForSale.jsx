import React from "react";
import AddCar from "../components/AddCar";
import { Link } from "react-router-dom";

export default function CarsForSale({ user, cars, onAddCar }) {
  return (
    <div className="cars-for-sale" style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        מכוניות למכירה
      </h2>
      <div
        className="cars-list"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {cars.map((car) => (
          <div
            key={car.id}
            className="car-item"
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "16px",
              width: "300px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
              textAlign: "center",
            }}
          >
            <img
              src={car.image}
              alt={car.name}
              onError={(e) => (e.target.src = "/images/default-car.jpg")}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ margin: "10px 0", color: "#333" }}>{car.name}</h3>
            <p>קילומטראז': {car.mileage} ק"מ</p>
            <p>בעלות: {car.owner}</p>
            <p>מחיר: {car.price}</p>
            <Link to="/purchase" style={{ textDecoration: "none" }}>
              <button
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                לרכישה
              </button>
            </Link>
          </div>
        ))}
      </div>
      {user && (
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ textAlign: "center" }}>הוסף רכב למכירה</h3>
          <AddCar onAdd={onAddCar} />
        </div>
      )}
    </div>
  );
}

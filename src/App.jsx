import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import TodoApp from "./pages/TodoApp";
import TodoDetails from "./pages/TodoDetails";
import TodoEdit from "./pages/TodoEdit";
import UserDetails from "./pages/UserDetails";
import UserLogin from "./pages/UserLogin";
import CarsForSale from "./pages/CarsForSale";
import PurchaseForm from "./pages/PurchaseForm"; // ייבוא רכיב הרכישה
import "./styles/main.css";

function App() {
  const [user, setUser] = useState(null);
  const [cars, setCars] = useState([
    {
      id: 1,
      name: "Lamborghini Huracan",
      price: "1,500,000 ₪",
      mileage: 5000,
      owner: "יד ראשונה",
      image: "/images/lamborghini-aventador.jpg",
    },
    {
      id: 2,
      name: "Ferrari F8 Tributo",
      price: "1,800,000 ₪",
      mileage: 3000,
      owner: "יד ראשונה",
      image: "/images/ferrari-f40.jpg",
    },
    {
      id: 3,
      name: "Porsche 911 Carrera",
      price: "950,000 ₪",
      mileage: 15000,
      owner: "יד שנייה",
      image: "/images/porsche.jpg",
    },
  ]);

  const handleLogin = (userData) => {
    if (userData && userData.email) {
      setUser(userData);
    } else {
      console.error("Invalid user data passed to handleLogin");
    }
  };

  const handleAddCar = (newCar) => {
    setCars((prevCars) => [...prevCars, newCar]);
  };

  return (
    <Router>
      <AppHeader user={user} />
      <main>
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="/todo/:id" element={<TodoDetails />} />
          <Route path="/todo/edit/:id" element={<TodoEdit />} />
          <Route path="/user" element={<UserDetails user={user} />} />
          <Route path="/login" element={<UserLogin onLogin={handleLogin} />} />
          <Route
            path="/cars-for-sale"
            element={
              <CarsForSale user={user} cars={cars} onAddCar={handleAddCar} />
            }
          />
          <Route path="/purchase" element={<PurchaseForm />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

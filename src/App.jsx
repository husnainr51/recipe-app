import React from "react";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage";

const App = () => {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
};

export default App;

import BeerList from "@/src/components/BeerList";
import ProtectedRoute from "@/src/components/ProtectedRoute";
import React from "react";

const Beerlist = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0", 
  };

  const titleStyle = {
    fontSize: "30px",
    marginBottom: "20px",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Beer List</h1>
      <ProtectedRoute>
        <BeerList />
      </ProtectedRoute>
    </div>
  );
};

export default Beerlist;

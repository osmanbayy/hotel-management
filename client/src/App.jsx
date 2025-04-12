import React from "react";
import "./App.css";
import { AppRouter } from "./routes/AppRouter";

const App = () => {
  return (
    <div className="min-h-screen font-sans">
      <AppRouter />
    </div>
  );
};

export default App;

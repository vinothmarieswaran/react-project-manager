import React from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div>
      <Header username="Vinoth Marieswaran"/>
     
      <main>
        <Dashboard />
      </main>
    </div>
  )
}

export default App

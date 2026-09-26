import { useState } from "react";

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Dashboard</h2>

      <p>Projects: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Add Project
      </button>
    </section>
  );
}

export default Dashboard;
import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  let count = people.length;
  return (
    <>
      <main>
        <section className="container">
          <h3>{count} birthdays today</h3>
          <List people={people}></List>
          <button
            className="btn"
            onClick={() => {
              setPeople([]);
            }}
          >
            clear All
          </button>
        </section>
      </main>
    </>
  );
}

export default App;

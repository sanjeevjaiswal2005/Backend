import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [notes, setNotes] = useState([
    {
      title: "tets title 1",
      description: "test descripton ",
    },
    {
      title: "tets title 2",
      description: "test descripton ",
    },
    {
      title: "tets title 3",
      description: "test descripton ",
    },
    {
      title: "tets title 4",
      description: "test descripton ",
    },
  ]);

  axios.get("http://localhost:3000/api/notes").then((res) => {
    // console.log(res.data.notes);
    setNotes(res.data.notes);
  });
  return (
    <>
      <div className="notes">
        {notes.map((notes, idx) => {
          return (
            <div className="note">
              <h1>{notes.title}</h1>
              <p>{notes.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;

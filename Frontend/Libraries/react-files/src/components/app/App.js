import React, { useState } from "react";
import "./App.css";

import Status from "../status/status";
import Form from "../form/form";
import Movies from "../movies/movies";

const App = () => {
  const [data, setData] = useState([
    {
      id: 0,
      name: "Karib dengizi qaroqchilari",
      favourite: false,
      views: 999,
    },
  ]);

  return (
    <div className="main">
      <Status />
      <Form />
      <Movies data={data} />
    </div>
  );
};

export default App;

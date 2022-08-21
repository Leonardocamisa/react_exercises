import React from "react";
import CarDetails from "./CarDetails";

const App = () => {
  return (
    <>
      <div>
        <CarDetails initialData = {{model : "BMW", year : "2020", color : "blue"}}/>
      </div>
    </>
  );
}

export default App;  
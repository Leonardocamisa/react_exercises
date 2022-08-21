import React from "react";

import Welcome from "./Welcome";
import { useState } from "react";
import LanguageContext from "./LanguageContext";

function App() {
  const [language, setlanguage] = useState("en");

  const handleChangeLanguage = (event) => {
    setlanguage(event.target.value)
  };
  return (
    <>
      <div>
        <select name="" id="" onChange={handleChangeLanguage}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <LanguageContext.Provider value={language}>
          <Welcome />
        </LanguageContext.Provider>
      </div>
    </>
  );
}
export default App;
import React from "react";
import { Welcome } from "./Welcome";
import { Routes, Route } from "react-router-dom";
import { ClickCounter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Welcome name="ALEEEE" />}></Route>
          <Route path="/counter" element={<ClickCounter />}></Route>
          <Route path="users/:username" element={<ShowGithubUser />}/>
        </Routes>
      </div>
    </>
  );
}
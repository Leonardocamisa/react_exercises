import React from "react";
import { Welcome } from "./Welcome";
import { Routes, Route } from "react-router-dom";
import { ClickCounter } from "./Counter";

export function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Welcome name="ALE" />}></Route>
          <Route path="/counter" element={<ClickCounter />}></Route>
        </Routes>
      </div>
    </>
  );
}
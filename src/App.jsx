import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

// View
import Board from "./views/Board";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Routes >
          <Route path="/" element={<Board/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

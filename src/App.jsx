import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </>
  );
}

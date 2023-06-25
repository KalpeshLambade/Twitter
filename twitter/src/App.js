import { Route, Routes } from "react-router-dom";
import "./App.css";
import Test from "./Component/Home";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;

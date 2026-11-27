import "/reset.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import RecettePage from "./pages/RecettePage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<RecettePage />} />
      </Routes>
    </>
  );
}

export default App;

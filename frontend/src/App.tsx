import "/reset.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import LogPage from "./pages/LogPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<LogPage />} />
      </Routes>
    </>
  );
}

export default App;

import Header from "components/Header";
import HomePage from "components/HomePage";
import ExpensesPage from "components/ExpensesPage";
import IncomePage from "components/IncomePage";
import ReportsPage from "components/ReportsPage";
import Footer from "components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto max-w-screen-lg max-h-screen justify-center">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

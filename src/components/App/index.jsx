import Header from "components/Header";
import ExpensesPage from "components/ExpensesPage";
import IncomePage from "components/IncomePage";
import Footer from "components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto max-w-screen-md max-h-screen justify-center">
        <Header />
        <Routes>
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/income" element={<IncomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Customers from "./pages/Customers";
import CustomerDetail from "./pages/CustomerDetail";
import AllTransfers from "./pages/AllTransfers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/all-customers" element={<Customers />} />
        <Route path="/customer-details/:id" element={<CustomerDetail />} />
        <Route path="/all-transfers" element={<AllTransfers />} />
      </Routes>
    </>
  );
}

export default App;

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
        <Route path="https://public-bank-for-charity-sachin.netlify.app/" element={<Homepage />} />
        <Route path="https://public-bank-for-charity-sachin.netlify.app/all-customers" element={<Customers />} />
        <Route path="https://public-bank-for-charity-sachin.netlify.app/customer-details/:id" element={<CustomerDetail />} />
        <Route path="https://public-bank-for-charity-sachin.netlify.app/all-transfers" element={<AllTransfers />} />
      </Routes>
    </>
  );
}

export default App;

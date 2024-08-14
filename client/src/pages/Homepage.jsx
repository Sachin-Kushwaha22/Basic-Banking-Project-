import MainSection from "../components/Layout/MainSection";
import Header from "../components/Layout/Header";
import Main from "../components/Layout/MainSection";
import { useNavigate } from "react-router-dom";
import './Homepage.css'

const Homepage = () => {
  const navigate = useNavigate();

  const handleViewCustomersBtn = () => {
    navigate("/all-customers");
  };

  const handleViewTransactions = () => {
    navigate("/all-transfers");
  };

  return (
    <div className="body-homepage">
      <Header />
      <div className="main-div-homepage">
        <div className="home-card">
          {/* <p className="p1">Welcome to</p> */}
          <p className="p3">A bank for good</p>
          <p className="p2">Public Bank For Charity</p>
          <p className="p4">Join an ethical bank that uses its savers' money to lend to charities and social enterprises.</p>
          <button onClick={handleViewCustomersBtn} className="customer-btn">CUSTOMERS</button>
          <button onClick={handleViewTransactions} className="transaction-btn">TRANSACTIONS</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

// const MainContainer = styled.div`
//   margin-top: 3px;
//   min-height: inherit;
//   background: transparent linear-gradient(180deg, #f1f8ff 0%, #ffffff 100%) 0%
//     0% no-repeat padding-box;
// `;

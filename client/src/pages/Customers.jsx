import styled from "styled-components";
import logo from './bank.png'
import MainSection from "../components/Layout/MainSection";
import { useNavigate } from "react-router-dom";
import './Customer.css'


import { useGetAllCustomersQuery } from "../services/customers";

const Customers = () => {
  const { data, isLoading } = useGetAllCustomersQuery();
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/customer-details/${id}`);
  };

  return (
    <div>
      {/* <Header /> */}
      <nav className="nav">
        <div className="main-header2">
          <div className="logo2">
            <div className="logo-img2"><img src={logo} alt="" width='50px' /></div>
            <div className="bank-name2"><p className="pbc2">PBFC</p><p className="bank2">BANK</p></div>
          </div>

          <div className="header-contents2">
            <ul style={{ listStyle: 'none' }} className="header-items2">
              <a href="/" className="nav-item2">HOME</a>
              <a href="/all-customers" className="nav-item2">CUSTOMERS</a>
              <a href="/all-transfers" className="nav-item2">TRANSACTIONS</a>
            </ul>
          </div>
        </div>
      </nav>
      <MainSection>
        {isLoading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "80vh" }}
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <StyledTable className="table-size container table table-sm table-hover table-striped mt-2">
            <thead className="table-light">
              <tr>
                <th>Sr.No.</th>
                <th>Name</th>
                <th>Balance</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="customer-tbody">
              {data?.users &&
                data?.users.map((user, idx) => {
                  return (
                    <tr key={user._id}>
                      <td>{idx + 1}.</td>
                      <td>{user.name}</td>
                      <td>₹{user.balance}</td>
                      <td>
                        <button
                          className="primary-btn"
                          onClick={() => handleClick(user._id)}
                        >
                          Pay
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </StyledTable>
        )}
      </MainSection>
    </div>
  );
};

export default Customers;

const StyledTable = styled.table`
  .table {
    height: 60vh;
    padding: 20px 30px;
  }
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  background-color: #004880;
  color: white;
  padding: 4px 10px;
  border-radius: 4px;
  margin-right: 4rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

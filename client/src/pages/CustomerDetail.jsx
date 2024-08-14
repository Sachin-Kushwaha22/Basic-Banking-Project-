import Header from "../components/Layout/Header";
import MainSection from "../components/Layout/MainSection";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Transfer from "../components/Transfer";
import { useGetCustomerDetailQuery } from "../services/customers";
import { Toaster } from "react-hot-toast";
import logo from './bank.png'
import './Customer.css'

const CustomerDetail = () => {
  const { id } = useParams();
  const [isTransfer, setIsTransfer] = useState(false);
  const {
    data,
    isLoading,
    refetch: refetchCustomer,
  } = useGetCustomerDetailQuery(id);

  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/all-customers");
  };

  const handleTransferMoneyBtn = () => {
    setIsTransfer(true);
  };

  var format = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });

  return (
    <div>
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
      </nav>{/* <Header /> */}

      <MainSection>
        <Toaster />
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
          <div className="container p-5" style={{ color: "#004880" }}>
            <button
                className="primary-btn"
                onClick={handleBackButton}
                style={{ marginRight: "1rem" ,display:'flex', alignItems:'center',padding:'10px',marginTop:'3rem'}}
              >
               &lt; Back
              </button>

            <dl className="row row1">
              <dt className="col-sm-3">Name</dt>
              <dd className="col-sm-9">{data?.user[0].name}</dd>
              <dt className="col-sm-3">Email</dt>
              <dd className="col-sm-9">{data?.user[0].email}</dd>
              <dt className="col-sm-3">Mobile No.</dt>
              <dd className="col-sm-9">+91 {data?.user[0].mobile}</dd>
              <dt className="col-sm-3">A/C Balance</dt>
              <dd className="col-sm-9">
                {format.format(data?.user[0].balance)}
              </dd>
            </dl>
            <div className="d-flex justify-content-center mt-5">
              
              <button style={{}} className="primary-btn" onClick={handleTransferMoneyBtn}>
                Transfer Money
              </button>
            </div>
          </div>
        )}

        {isTransfer ? (
          <Transfer
            setIsTransfer={setIsTransfer}
            user={isLoading ? null : data}
            refetchCustomer={refetchCustomer}
          />
        ) : (
          <div> </div>
        )}
      </MainSection>
    </div>
  );
};

export default CustomerDetail;

const StyledButton = styled.button`
  border: none;
  outline: none;
  background-color: #004880;
  color: #eee;
  padding: 6px 10px;
  border-radius: 4px;
  margin-right: 1rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

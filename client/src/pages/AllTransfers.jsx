import './Customer.css'
import logo from './bank.png'
import MainSection from "../components/Layout/MainSection";
import { useGetAllTransactionsQuery } from "../services/customers";

const AllTransfers = () => {
  const { data, isLoading } = useGetAllTransactionsQuery(
    { count: 5 },
    { refetchOnMountOrArgChange: true }
  );

  var format = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });

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
          <table className="table-size2 container table table-sm table-hover table-responsive-sm table-striped align-middle mt-2">
            <thead >
              <tr>
                <th>Sr.No.</th>
                <th>Sender</th>
                <th>Receiver</th>
                <th>Amount</th>
                <th>Date & Time</th>
              </tr>
            </thead>
            <tbody >
              {data?.transactions &&
                data?.transactions.map((transaction, idx) => {
                  return (
                    <tr key={transaction._id}>
                      <td>{idx + 1}</td>
                      <td>{transaction.sender.name}</td>
                      <td>{transaction.receiver.name}</td>
                      <td>{format.format(transaction.amount)}</td>
                      <td>
                        {new Date(transaction.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </MainSection>
    </div>
  );
};

export default AllTransfers;

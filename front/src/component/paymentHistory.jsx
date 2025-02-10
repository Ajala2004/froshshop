import React, { useEffect, useState } from "react";
import axios from "axios";

const PaymentHistory = ({ userId }) => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const { data } = await axios.get(`/api/payment/history/${userId}`);
        setPayments(data.payments);
      } catch (err) {
        alert("Error fetching payment history: " + err.message);
      }
    };
    fetchPayments();
  }, [userId]);

  return (
    <div>
      <h2>Payment History</h2>
      {payments.length === 0 ? (
        <p>No payments found</p>
      ) : (
        <ul>
          {payments.map((payment) => (
            <li key={payment._id}>
              {payment.amount} - {payment.status} - {payment.createdAt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaymentHistory;
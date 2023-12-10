/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Hooks/AuthProvider';
import './MyOrder.css'
const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:8000/booking?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  });
  return (
    <div>
      <h2>orders :{orders.length}</h2>
      <div className="overflow-x-auto container mx-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-base-200 text-white">
              <th>Index</th>
              <th>jewellary Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.jewellaryName}</td>
                <td>{order.price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Index</th>
              <th>Email</th>
              <th>jewellary Name</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;

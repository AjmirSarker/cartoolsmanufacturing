import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useOrders from '../../Hooks/useOrders';
import CustomLink from '../Shared/CustomLink';

const Order = ({ index, order }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [Order, setOrder] = useState([]);
  const [meow, setMeow] = useState([]);
  const [products, setProducts] = useState([]);

  const home = () => {
    navigate('/');
  };

  // console.log(Order);
  const [Delete, setDelete] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [orders, setOrders] = useOrders();
  const sendMyItemDelete = (id) => {
    fetch(
      `https://carmanufacturingserver.onrender.com/product?name=${order?.product}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMeow(data);
      });
    console.log(meow);
    setDelete(true);

    if (Delete) {
      const url = `https://carmanufacturingserver.onrender.com/orders/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            console.log('deleted');
            const remaining = orders.filter((item) => item._id !== id);
            setOrders(remaining);
            setShow(false);
          }
        });
    } else {
    }
  };

  return (
    <tr>
      <td>{`${index + 1}`}</td>
      <td>{order?.product}</td>
      <td>{order?.quantity}</td>
      <td>${`${order?.price * order?.quantity} `}</td>
      <td>
        {!order.paid && (
          <CustomLink to={`/dashboard/payment/${order?._id}`}>
            <button onClick={home} type="button" class="btn btn-sm btn-success">
              Pay
            </button>
          </CustomLink>
        )}
        {order.paid && <p className="text-success">Paid</p>}
        {order.paid && <p className="text-success">{order.transactionId}</p>}
      </td>

      <td>
        <button
          disabled={order.paid}
          onClick={handleShow}
          type="button"
          class="btn btn-sm btn-danger"
        >
          X
        </button>
      </td>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>DO DOUBLE YES CLICK TO DELETE THE ORDER!!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            No
          </Button>
          <Button variant="danger" onClick={() => sendMyItemDelete(order._id)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </tr>
  );
};

export default Order;
// ৳

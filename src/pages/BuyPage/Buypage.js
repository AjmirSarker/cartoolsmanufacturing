import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Product from '../../Allproducts/Product';
import Loading from '../Shared/Loading';
import toast from 'react-hot-toast';
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Buypage = () => {
  const [loader, setLoader] = useState(false);
  const [count, setCount] = useState(false);
  const navigate=useNavigate()
  const { id } = useParams();
  const [product, setProducts] = useState({});

  useEffect(() => {
    setLoader(true);
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoader(false);
      });
  }, [id]);
  const checkCount = (e) => {
    e.preventDefault();
    const Unit = e.target.unit.value;
    console.log(Unit);
    if (Unit < product.minorder || Unit > product.quantity) {
      setCount(true);
      const again = window.confirm('Buy more units')
      console.log(again);
      if (again) {
        setCount(false);
      }
      else{
        toast.error(`You didn't fullfil our requirements`)
navigate('/')
      }
      e.target.reset();
    } else {
      toast.success('You are ready to serve');
      setCount(false);
    }
  };

  return (
    <div className="bg-info bg-gradient ">
      {loader === true ? <Loading></Loading> : ''}
      <div className="container p-2  mb-5 mt-3">
        <div class=" row  g-4">
          <div className="col col-sm-6 col-md-5">
            {<Product more={1} product={product}></Product>}
          </div>
          <div className='col d-flex  col-sm-6 col-md-7 bg-success bg-gradient rounded-3 border border-warning border-5"'>
            <Form onSubmit={checkCount}>
              <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
                <Form.Label>
                  <h3>Product Count</h3>
                </Form.Label>
                <Form.Control
                  name="unit"
                  type="number"
                  placeholder="Enter total unit number"
                />
                <Form.Text className=" d-flex fw-bolder flex-row-reverse text-info">
                  You hae to enter the value in Number.
                </Form.Text>
              </Form.Group>

              <Button
                disabled={count}
                className="btn btn-success"
                type="submit"
              >
                Pay
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buypage;

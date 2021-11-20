import React from 'react';
import CartDisplay from '../CartDisplay/CartDisplay';
import { NavLink } from 'react-router-dom';

const Cart = (props) => {
    const{cart} = props;
    console.log("from cart section ",cart);
    let i = 1;
    let total = 0;
    cart.map((service)=>{
      return (  (total = (total + (service.price - (service.price*(service.discount/100))) )).toFixed(2) );
    })
    console.log("from cart services",total);
    return (
        <div className="mt-5 pt-5">
            <h1 className="m-5"> <strong><span className="text-warning"> Cart </span> Page </strong></h1>
            <div className="container">
            
            <table className="table mb-5 table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Course Title</th>
      <th scope="col">Author</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
            {
                cart.map((service)=>{
                    return(
                        <CartDisplay service={service} var={i++} key={service.serviceId}></CartDisplay>
                    )
                })
            }
            
            <tr>
        <th scope="row"> </th>
        <td> </td>
        <td> </td>
        <td className="fw-bolder"><strong> Total :  {total.toFixed(2)}$ </strong> </td>
      </tr>
            </tbody>
            </table>
            </div>
            <NavLink to="/login" activeClassName="inactive" > <h5 className=" btn btn-warning shadow-lg border-class mx-2 fw-bolder" >  Log in To Continue </h5> </NavLink>
        </div>
    );
};

export default Cart;
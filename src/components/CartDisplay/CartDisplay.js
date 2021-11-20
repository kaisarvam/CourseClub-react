import React from 'react';

const CartDisplay = (props) => {
    const {author,authorImage,price,discount,title} = props.service;
    const newPrice = (price-(price*(discount/100))).toFixed(2);
    return (
      <tr>
        <th scope="row">{props.var}</th>
        <td><strong>{title.toUpperCase()}</strong></td>
        <td>{author}</td>
        <td><strong>Price : {newPrice}$ </strong></td>
      </tr>
    );
};

export default CartDisplay;
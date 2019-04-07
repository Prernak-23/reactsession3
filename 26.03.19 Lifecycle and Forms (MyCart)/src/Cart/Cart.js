import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Cart.css';

const Cart = props => {
  return (
    <tr>
      <td>{props.data.name}</td>
      <td>{props.data.quantity}</td>
      <td>{props.data.price}</td>
      <td>{(props.data.price) * (props.data.quantity)}</td>
      
      <td>
        <FontAwesomeIcon
          className="font-awesome-icon"
          onClick={() => props.handleRemove(props.data.index)}
          icon="minus" />
      </td>

      <td>
        <FontAwesomeIcon
          className="font-awesome-icon"
          onClick={() => props.handleAdd(props.data.index)}
          icon="plus" />
      </td>

      <td>
        <FontAwesomeIcon
          className="font-awesome-icon"
          onClick={() => props.handleDelete(props.data.index)}
          icon="trash" />
      </td>
    </tr>
  );
};

export default Cart;

import './Total.css';

import React from 'react'

function CartTotal(props) {

  return (
    <div className="total">
      <h3>Total</h3>
      {
        <p>{props.total}</p>
      }

    </div>
  )
}

export default CartTotal

// @flow
import * as React from 'react';
type Props = {
  name : string,
  price : number,
  quantity : number,
  total : number
};
export function Cart(props: Props) {
  return (
    <div className='cart'>
      <p className="name">{props.name}</p>
      <p className="price">{props.price}</p>
      <p id="quantity">{props.quantity}</p>
      <p id="total">{props.total}</p>
      <div className="group-button">
        <button>+</button>
        <button>-</button>
        <button>REMOVE</button>
      </div>
    </div>
  );
};


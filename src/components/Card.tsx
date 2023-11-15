// @flow
import * as React from 'react';
import './Card.css';
type Props = {
  title : string,
  price : number,
  src : string,
  addToCart : (t : any) => void,
};

export function Card(props: Props) {
  return (
    <div className='card'>
      <img src={props.src} alt={props.title} />
      <div className="infor">
          <strong className="title">{props.title}</strong>
          <p>Price : <span className="price">{'$' + props.price}</span></p>
          <button onClick={props.addToCart}>ADD TO CART</button>
      </div>
    </div>
  );
};

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
    <div className='group relative'>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
        <img src={props.src} alt={props.title} className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
      </div>
      <div className="mt-4 flex justify-between">
        <h3 className="text-sm text-gray-700">{props.title}</h3>
        <button className='add-to-cart' onClick={props.addToCart}>ADD TO CART</button>
        <p className='text-sm font-medium text-gray-900'>Price :{'$' + props.price}</p>
      </div>
    </div>
  );
};

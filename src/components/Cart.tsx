// @flow

type Props = {
  id : number,
  name : string,
  imageSrc : string,
  price : number,
  quantity : number,
  total : number,
  onPlus : (e: any) => void,
  onMinus : (e: any) => void,
  onRemove : (e: any) => void
};
export function Cart(props: Props) {
  return (
    // <div className='cart'>
    //   <p className="name">{props.name}</p>
    //   <p className="price">price: ${props.price}</p>
    //   <p id="quantity">quantity: {props.quantity}</p>
    //   <p id="total">total: ${props.total}</p>
    //   <div className="group-button">
    //     <button onClick={props.onPlus}>+</button>
    //     <button onClick={props.onMinus}>-</button>
    //     <button onClick={props.onRemove}>REMOVE</button>
    //   </div>
    // </div>
    <div className="mt-8">
      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          <li key={props.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={props.imageSrc}
                alt={props.name}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <a>{props.name}</a>
                  </h3>
                  <p className="ml-4">${props.price}</p>
                </div>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Quantity {props.quantity}</p>

                <div className="flex">
                  <button
                    type="button"
                    onClick={props.onPlus}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={props.onMinus}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    onClick={props.onRemove}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};


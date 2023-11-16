import { Component, ReactNode, useState } from 'react'
import { Card } from './Card'
import { Cart } from './Cart'
import { Payment } from './Payment'
import { LandingPage } from './LandingPage'

let initProducts = [
  {
    id: 0,
    title: 'Cauliflower',
    price: 15,
    src: '/Broccoli2.jpg',
    quantity: 0,
    total: 0
  },
  {
    id: 1,
    title: 'Carrot',
    price: 5,
    src: '/carrot.jpg',
    quantity: 0,
    total: 0
  },
  {
    id: 2,
    title: 'Radish',
    price: 9,
    src: '/cucai.jpg',
    quantity: 0,
    total: 0
  },
  {
    id: 3,
    title: 'Radish',
    price: 9,
    src: '/cucai.jpg',
    quantity: 0,
    total: 0
  },
  {
    id: 4,
    title: 'Radish',
    price: 9,
    src: '/cucai.jpg',
    quantity: 0,
    total: 0
  },
  {
    id: 5,
    title: 'Radish',
    price: 9,
    src: '/cucai.jpg',
    quantity: 0,
    total: 0
  },
  {
    id: 6,
    title: 'Radish',
    price: 9,
    src: '/cucai.jpg',
    quantity: 0,
    total: 0
  },
  {
    id: 7,
    title: 'Radish',
    price: 9,
    src: '/cucai.jpg',
    quantity: 0,
    total: 0
  },
];

function Home() {

  const [products, setProducts] = useState(initProducts);
  const [lastTotal, setLastTotal] = useState(0);

  function addToCart(id: number) {

    const newProducts = products.map(e => {
      if (e.id !== id) return e
      else {
        e.quantity += 1;
        e.total = e.quantity * e.price;
        setLastTotal(products.reduce((total, e) => {
          return e.total + total
        }, 0));
        return e;
      }
    });

    setProducts(newProducts);
    console.log(products);
    
  }

  function removeCart(id: number) {
    const newProducts = products.map(e => {
      if (e.id !== id) return e
      else {
        e.quantity = 0;
        e.total = 0;
        setLastTotal(products.reduce((total, e) => {
          return e.total + total
        }, 0));
        return e;
      }
    });

    setProducts(newProducts);
  }

  function minusCart(id: number) {
    const newProducts = products.map(e => {
      if (e.id !== id) return e
      else {
        e.quantity -= 1;
        e.total = e.quantity * e.price;
        setLastTotal(products.reduce((total, e) => {
          return e.total + total
        }, 0));
        return e;
      }
    });

    setProducts(newProducts);
  }

  return (
    <>
      <LandingPage onNavClick={()=>{}}></LandingPage>
      <div className="main-shop">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h3 className='text-2xl font-bold tracking-tight text-gray-900'>Products</h3>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map(e => {
                return (
                  <Card
                    key={e.id}
                    title={e.title}
                    price={e.price}
                    src={e.src}
                    addToCart={() => addToCart(e.id)}
                  >
                  </Card>)
              })}
            </div>
          </div>

          <div className="shopping-carts">
            <div className="cart-list">
              {products.map(e => {
                if (e.quantity > 0) {
                  return (
                    <Cart
                      key={e.id}
                      name={e.title}
                      price={e.price}
                      quantity={e.quantity}
                      imageSrc={e.src}
                      total={lastTotal}
                      onPlus={() => addToCart(e.id)}
                      onMinus={() => minusCart(e.id)}
                      onRemove={() => removeCart(e.id)}
                    ></Cart>
                  );
                }
                else {
                  return;
                }
              })}
            </div>
          </div>
        </div>
        {/* <Payment
          totalPayment={products.reduce((total, e) => {
            return e.total + total
          }, 0)}
        ></Payment> */}
      </div>

    </>
  )
}

export default Home

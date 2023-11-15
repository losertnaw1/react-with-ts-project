import { Component, ReactNode, useState } from 'react'
import './App.css'
import { Card } from './components/Card'
import { Cart } from './components/Cart'

const products = [
  {
    id: 1,
    title: 'Cauliflower',
    price: 15,
    src: '/Broccoli2.jpg',
    quantity: 0,
    total: 0
  },
  {
    id: 2,
    title: 'Carrot',
    price: 5,
    src: '/carrot.jpg',
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
];

function App() {

  function addToCart(e: Event) {
    console.log(e);
  }
  
  return (
    <>
      <h1>DatLQ13's vegetable shop</h1>
      <div className="main-shop">
        <div className="products">
          <h3>Products</h3>
          <div className="card-list">
            {products.map(e => {
              return (
              <Card
                key={e.id}
                title={e.title}
                price={e.price}
                src={e.src}
                addToCart={(e) => addToCart(e)}
              >
              </Card>)
            })}
          </div>
        </div>

        <div className="shopping-carts">
          <h3>Shopping Carts</h3>
          <div className="cart-list">
            {products.map(e => {
              if(e.quantity > 0) {
                return (
                  <Cart
                    key={e.id}
                    name = {e.title}
                    price = {e.price}
                    quantity = {e.quantity}
                    total = {e.total}
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
    </>
  )
}

export default App

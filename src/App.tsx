import { Component, ReactNode, useState } from 'react'
import './App.css'
import Card from './components/Card'

const products = [
  {
    title: 'Cauliflower',
    price: 15,
    src: '../public/Broccoli2.jpg'
  },
  {
    title: 'Carrot',
    price: 5,
    src: '../public/carrot.jpg'
  },
  {
    title: 'Radish',
    price: 9,
    src: '../public/cucai.jpg'
  },
]

class App extends Component {
  // const [count, setCount] = useState(0)

  public render() {
    return (
      <>
        <div className="main-shop">
          <h3>Products</h3>
          <div className="card-list">
            {products.map(e => {
              return (<Card
                title={e.title}
                price={e.price}
                src={e.src}
              >
              </Card>)
            })}
          </div>
        </div>
      </>
    )
  }

}

export default App

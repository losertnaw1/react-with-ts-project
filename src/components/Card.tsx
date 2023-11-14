import * as React from 'react';

export interface ICardProps {
    title : string,
    price : number,
    src : string
}

export default class Card extends React.Component<ICardProps> {

    addToCart(title : string) {
        console.log(title);
    };
  public render() {
    return (
      <div>
        <img src={this.props.src} alt={this.props.title} />
        <div className="infor">
            <strong className="title">{this.props.title}</strong>
            <p>Price : <span className="price">{'$' + this.props.price}</span></p>
            <button onClick={() => this.addToCart(this.props.title)}>ADD TO CART</button>
        </div>
      </div>
    );
  }
}

import React from 'react';
import { Home } from './Home';
import { Blog } from './Blog';
import { Order } from './Order';
import Product from './Product';
import { Profile } from './Profile';
import { Setting } from './Setting';
import './Content.css';

type Props = {
    tabSelected : string
}

const Content = (props : Props) => {
    return (
        <div className="content">
            {props.tabSelected === 'Home' && <Home></Home>}
            {props.tabSelected === 'Blog' && <Blog></Blog>}
            {props.tabSelected === 'Order' && <Order></Order>}
            {props.tabSelected === 'Product' && <Product></Product>}
            {props.tabSelected === 'Profile' && <Profile></Profile>}
            {props.tabSelected === 'Setting' && <Setting></Setting>}
        </div>
    )
}

export default Content;
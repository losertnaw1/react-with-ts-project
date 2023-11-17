// @flow
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './Home';
import { Blog } from './Blog';
import { Order } from './Order';
import { Product } from './Product';
import { Profile } from './Profile';
import { Setting } from './Setting';

const listSidebar = [
  {
    iconSrc : '#',
    text: 'Home',
    link: '/admin/'
  },
  {
    iconSrc : '#',
    text: 'Profile',
    link: '/admin/profile'
  },
  {
    iconSrc : '#',
    text: 'Products',
    link: '/admin/products'
  },
  {
    iconSrc : '#',
    text: 'Orders',
    link: '/admin/orders'
  },
  {
    iconSrc : '#',
    text: 'Blogs',
    link: '/admin/blogs'
  },
  {
    iconSrc : '#',
    text: 'Settings',
    link: '/admin/settings'
  },
]

const Admin:React.FC = () => {
  return (
    <div>
      <div className="sidebar">
        <ul>
          <li className="logo">
            <a href="#">
              <div className="icon"></div>
              <div className="text">Website Logo</div>
            </a>
          </li>
          <div className="menu-list">
            {listSidebar.map(e => {
              return (
                <li key={e.text}>
                  <a href={e.link}>
                    <div className="icon"></div>
                    <div className="text">{e.text}</div>
                  </a>
                </li>
              )
            })}
          </div>
        </ul>

      </div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/admin/" element={<Home />} />
          <Route path="/admin/products" element={<Product />} />
          <Route path="/admin/orders" element={<Order />} />
          <Route path="/admin/blogs" element={<Blog />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/settings" element={<Setting />} />
        </Routes>
    </BrowserRouter> */}
    </div>
  );
};

export default Admin
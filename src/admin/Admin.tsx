// @flow
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/outline'

import './Admin.css'
import { Home } from './Home';
import { Blog } from './Blog';
import { Order } from './Order';
import { Product } from './Product';
import { Profile } from './Profile';
import { Setting } from './Setting';

const listSidebar = [
  {
    icon: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
    text: 'Home',
    link: '#',
    active: true,
  },
  {
    icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
    text: 'Profile',
    link: '#',
    active: false,
  },
  {
    icon: 'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z',
    text: 'Products',
    link: '#',
    active: false,
  },
  {
    icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25',
    text: 'Orders',
    link: '#',
    active: false,
  },
  {
    icon: 'M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z',
    text: 'Blogs',
    link: '#',
    active: false,
  },
  {
    icon: 'M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75',
    text: 'Settings',
    link: '#',
    active: false,
  },
]

const Admin: React.FC = () => {
  return (
    <div className='admin-body'>
      <div className="sidebar">
        <ul>
          <li className="logo">
            <a href="#">
              <div className="icon"></div>
              <div className="title">Website Logo</div>
            </a>
          </li>
          <div className="menu-list">
            {listSidebar.map(e => {
              return (
                <li className={'list ' + (e.active ? 'active' : '')} key={e.text}>
                  <a href={e.link}>
                    <span className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d={e.icon} />
                      </svg>
                    </span>
                    <div className="title">{e.text}</div>
                  </a>
                </li>
              )
            })}
          </div>
        </ul>

      </div>
    </div>
  );
};

export default Admin
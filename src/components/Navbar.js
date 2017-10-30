import React, { Component } from 'react';
import logo from '../images/foodconnectlogo.png';
import { Layout, Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


const Nav = function() {
  return (
    <div className="Navbar">
        <img src={logo} className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Home</Menu.Item>
        </Menu>
    </div>
  )
}

export default Nav;
          // <Menu.Item key="2">Organizations</Menu.Item>
          // <Menu.Item key="3">Volunteer</Menu.Item>
          // <Menu.Item key="4">Those In Need</Menu.Item>
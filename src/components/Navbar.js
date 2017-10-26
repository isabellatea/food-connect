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
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
    </div>
  )
}

export default Nav;
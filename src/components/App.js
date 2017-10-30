import React, { Component } from 'react';
import Nav from './Navbar';
import { Button } from 'antd';
import { Layout, Menu, Affix } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Affix>
        <Nav />
        </Affix>

        <div className="container">
        
          <header className='getStarted'>
            Get Started
          </header>
          <section className='About'>
            About Here
            <Button type="primary">Button</Button>
          </section>

          <footer className='Footer'>
            Footer Here
          </footer>

        </div>
      </div>
    );
  }
}

export default App;
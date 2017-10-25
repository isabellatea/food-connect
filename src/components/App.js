import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail, Jumbotron, Button } from 'react-bootstrap';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <header className='Header'>
        <Jumbotron className='Jumbotron'>
          <Grid>
            <h1>Food Connect</h1>
            <p>Connecting organizations, volunteers, and those in need</p>

          </Grid>
        </Jumbotron>
      </header>
      <section className='About'>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                <h3>Organizations</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                <h3>Volunteers</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
              <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                <h3>Education</h3>
                <p>Description</p>
                <p>
                  <Button bsStyle="primary">Button</Button>&nbsp;
                  <Button bsStyle="default">Button</Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </section>
      <footer className='Footer'>
        Footer Here
      </footer>
      </div>
    );
  }
}

export default App;
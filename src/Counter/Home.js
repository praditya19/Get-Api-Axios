import React, { Component } from 'react';
import Header from '../Component/Header';
import Card from '../Component/Card';
import { Row, Col } from 'reactstrap';
import './Home.css';

class Home extends Component {
  render() {
    console.log(this.props.posts);
    return (
      <div>
        <Row>
          <Col md={8}>
            {this.props.posts.map((value, index) => {
              return (
                <Card
                  update={value.author.updated_at}
                  judul={value.judul}
                  id={value.author.id}
                  author={value.author.name}
                />
              );
            })}
          </Col>
          <Col md={4} />
        </Row>
      </div>
    );
  }
}
export default Home;

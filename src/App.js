import React, { Component } from 'react';
import Home from './Counter/Home';
import Axios from 'axios';
import './App.css';
class App extends Component {
  state = {
    posts: []
  };

  getDataFromApi = () => {
    Axios.get('http://167.160.188.135/api/book')
      .then(res => {  
        this.setState({
          posts: res.data.data
        });
        console.log(this.state.posts, 'ini Embernya');
      })
      .catch(a => {
        console.log(a);
      });
  };

  componentDidMount() {
    this.getDataFromApi();
  }
  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <Home posts={posts} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import About from '../About/About.jsx';
import Header from '../Header/Header.jsx';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <About />
      </div>
    );
  }
}

export default Home;

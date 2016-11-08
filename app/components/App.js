import React from 'react';
import Footer from './Footer';
import styles from '../styles/app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

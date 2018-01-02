import React, {Component} from 'react'
//ES5
//var config = require('./config.json');
//ES6
import config from './config.json'
import styles from './Greeter.css';
// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;
// };
export default class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
        {config.greetText}
      </div>
    );
  }
}
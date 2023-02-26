import React from 'react';
import ReactDOM from 'react-dom/client';

import { Component } from "react";
import Title from '../Components/Title';

class Home extends Component {
  
  constructor() {
    super();
    this.State = {
      title: "welcome to Tatvasoft Project",
      Description: "project is based on the e-books selling ",
    };
  }
  render() {
    return (
      <div>

        
        <h1>This is home page</h1>
        <h1>{this.State.title}</h1>
        <h1>{this.State.Description}</h1>
        <Title />
        <Title  name="Khushbu" />
        <Title name="Vipsa" />

        
      </div>
    );
  }
}

export default Home;
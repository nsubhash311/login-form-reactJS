import React, { Component } from "react";
import "./App.css";

import InputField from "./InputField";

class App extends Component {
  state = {
    name: null,
    email: null,
    password: null,
  };

  validateEmail = () => {
    const {email} = this.state
    if(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email)){
       return <p>It's an valid email👍😉</p>;
    }
    else{
      return <p>Its an invalid email👎😣</p>

    }
    
  };
  

  validatePassword1 = () => {
    const {password} = this.state
    if(this.state.password.length < 6){
      return<p>Max. 6 char only</p>
      }
    };

  validatePassword2 = () => {
      const {password} = this.state
      var reg = /^.*(?=.{6,20})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&!-_]).*$/;
  if(!reg.test(password)) {
  return <p>Should contain a maximum of 6 characters with atleast one uppercase and a lowercase</p>
  }else
  {
  return <p></p>
  }
      };

  render() {
    console.log(this.state.name);

    return (
      <div className="App">
        <InputField
          placeholder="name"
          type="text"
          onChange={(text) => {
            this.setState({ name: text.target.value });
          }}
          maxLength={100}
        />

        {this.state.name && (
          <p>{`${100 - this.state.name.length} left in 100 letters `}</p>
        )}

        <InputField
          placeholder="email"
          type="email"
          onChange={(text) => {
            this.setState({ email: text.target.value });
          }}
        />

        {this.state.email && this.validateEmail()}

        <InputField
          placeholder="password"
          type="password"
          maxLength={6}
          onChange={(text) => {
            this.setState({ password: text.target.value });
          }}
        />

        {this.state.password && this.validatePassword1() && this.validatePassword2() }
      </div>
    );
  }
}

export default App;
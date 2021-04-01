import React, { Component } from "react";

import { regExp, formValid } from "../action/FormConditions";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      userType: "",
      password: "",
      isError: {
        name: "",
        email: "",
        userType: "",
        password: "",
      },
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(this.state);
    } else {
      console.log("Form is invalid!");
    }
  };

  formValChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let isError = { ...this.state.isError };

    switch (name) {
      case "name":
        isError.name = value.length < 4 ? "Your Name is required" : "";
        break;
      case "email":
        isError.email = regExp.test(value)
          ? ""
          : "Please enter a valid email address";
        break;
      case "userType":
        isError.userType = value.length > 0 ? "" : "Please select user type";
        break;
      case "password":
        isError.password =
          value.length < 8 ? "Atleast 8 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({
      isError,
      [name]: value,
    });
  };

  checkLength = (e) => {
    const { isError } = this.state;
    if(isError[e].length > 0){
      return "react-form-singup__field--error"
    } else{
      return ''
    }
  }

  render() {
    const { isError } = this.state;

    return (
      <div className="react-form-section-inner">
        <div className="react-form-section-inner_header">
          <div className="react-form-indicator">
            Step 1 of 3
            <span className="react-form-indicator_dots">
              <i className="react-form-indicator_dot react-form-indicator_dot--active" />
              <i className="react-form-indicator_dot" />
              <i className="react-form-indicator_dot" />
            </span>
          </div>
        </div>
        <div className="react-form-section-inner_content">
          <h2>Let's set up your account</h2>
          <p>Already have an Account? <a href="/">Sign in</a></p>
          <form onSubmit={this.onSubmit} className="react-form-singup">
            <div className={`react-form-singup__field ${this.checkLength('name')} ${this.state.name ? "" : "react-form-singup__field--empty"}`}>
              {isError.name.length > 0 && (
                <span className="field-label-invalid">{isError.name}</span>
              )}
              <input
                type="text"
                placeholder="Joh Snow"
                className={ isError.name.length > 0 ? "is-invalid form-control" : "form-control" }
                name="name"
                onChange={this.formValChange}
              />
              <label className="field-label">Your Name</label>
            </div>
            <div className={`react-form-singup__field ${this.checkLength('email')} ${this.state.email ? "" : "react-form-singup__field--empty"}`}>
              {isError.email.length > 0 && (
                <span className="field-label-invalid">{isError.email}</span>
              )}
              <input
                type="email"
                placeholder="abc@gmail.com"
                className={ isError.email.length > 0 ? "is-invalid form-control" : "form-control" }
                name="email"
                onChange={this.formValChange}
              />
              <label className="field-label">Email address</label>
            </div>
            <div className={`react-form-singup__field react-form-singup__field--mt20 ${this.checkLength('userType')}  ${this.state.userType ? "" : "react-form-singup__field--empty"}`}>
              {isError.userType.length > 0 && (
                <span className="field-label-invalid">{isError.userType}</span>
              )}
              <select
                name="userType"
                className={ isError.userType.length > 0 ? "is-invalid form-control" : "form-control" }
                onChange={this.formValChange}
              >
                <option value="">I would describe my user type as</option>
                <option value="Developer">Developer</option>
                <option value="Designer">Designer</option>
              </select>
            </div>
            <div className={`react-form-singup__field ${this.checkLength('password')} ${this.state.password ? "" : "react-form-singup__field--empty"}`} >
              {isError.password.length > 0 ? (
                <span className="field-label-invalid">{isError.password}</span>
              ) : (
                <span className="field-label-info">Minimum 8 Characters</span>
              )}
              <input
                type="password"
                placeholder="********"
                className={ isError.password.length > 0 ? "is-invalid form-control" : "form-control" }
                name="password"
                onChange={this.formValChange}
              />
              <label className="field-label">Password</label>
            </div>
            <button className="react-form-singup__button" type="submit">Next</button>
          </form>
          <p>
            By clicking the "Next" button, you agree to creating a free account,
            and to <a href="/">Terms of service</a> and
            <a href="/"> Privacy Policy</a>
          </p>
        </div>
        
        
        
        
      </div>
    );
  }
}

export default SignUpForm;

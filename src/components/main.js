/* eslint-disable react/no-deprecated */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable consistent-return */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-use-before-define */
/* eslint-disable default-case */
import React, { Component } from 'react';
import StepOne from './step-one';
import StepTwo from './step-two';
import StepThree from './step-three';
import StepFour from './step-four';

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      fullName: '',
      email: '',
      password: '',
      telephoneNumber: '',
      address: '',
      country: '',
      cardNumber: '',
      secretCode: '',
    };
  }

  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem('user'));

    if (localStorage.getItem('user')) {
      this.setState({
        step: this.userData.step,
        fullName: this.userData.fullName,
        email: this.userData.email,
        password: this.userData.password,
        telephoneNumber: this.userData.telephoneNumber,
        address: this.userData.address,
        country: this.userData.country,
      });
    } else {
      this.setState({
        step: 1,
        fullName: '',
        email: '',
        password: '',
        telephoneNumber: '',
        address: '',
        country: '',
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('user', JSON.stringify(nextState));
  }

    // Go to next step
    nextStep = () => {
      const { step } = this.state;
      this.setState({
        step: step + 1,
      });
    }

    // Go back to previous step
    prevStep = () => {
      const { step } = this.state;
      this.setState({
        step: step - 1,
      });
    }

    // Handle field input change
    handleChange = (input) => (e) => {
      this.setState({ [input]: e.target.value });
    }

    render() {
      const { step } = this.state;
      const {
        fullName, email, password, telephoneNumber, address, country, cardNumber, secretCode,
      } = this.state;
      const values = {
        fullName, email, password, telephoneNumber, address, country, cardNumber, secretCode,
      };

      switch (step) {
        case 1:
          return (
            <StepOne
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 2:
          return (
            <StepTwo
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 3:
          return (
            <StepThree
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 4:
          return (
            <StepFour
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
      }
    }
}

export default Main;

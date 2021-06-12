import React, { Component } from 'react'

export class Main extends Component {
    state = {
        step: 1,
        fullName: "",
        emailAddress: "",
        password: "",
        telephoneNumber: "",
        address: "",
        country: "",
        cardNumber: "",
        secretCode: "",
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
     }

         // Go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
     }

        // Handle field change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Main
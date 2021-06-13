/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import './step-two.css';

export class StepTwo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep()
    }


    render() {
        const { fullName, password, email, handleChange} = this.props
        return (
            <div className="step-two-view">
          <Row className="justify-content">
            <a onClick={this.back} >
                <FontAwesomeIcon icon={faChevronLeft} className="mr-2 mr-sm-4 go-back"/>
            </a>
          <Row>
              <Col className="info-top">
              <p>Paso 01/03</p>
              <p>Personal Info.</p>
              <br/>
              </Col>
            </Row>
            <Row>
              <Col style={{width: "250px"}}>
              <h1>Registra tu cuenta individual</h1>
              <br/>
              </Col>
            </Row>
      
              <Col className="step-two-container">
                <Form>
                  <Form.Group controlId="fullname">
                    <Form.Control 
                      className ="step-two-input"
                      type="username" 
                      size="sm"
                      placeholder="Introduzca nombre completo" 
                      value={fullName} 
                      onChange={handleChange()} />
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Control 
                      className ="step-two-input"
                      type="email" 
                      size="sm"
                      placeholder="Introduzca el email" 
                      value={email} 
                      onChange={handleChange()}/>
                  </Form.Group>
      
                  <Form.Group controlId="password">
                    <Form.Control 
                      className ="step-two-input"
                      type="password" 
                      size="sm"
                      placeholder="Introduzca contraseña" 
                      value={password} 
                      onChange={handleChange()}/>
                  </Form.Group>

                  <p>Acepto los terminos y condiciones</p>

                  <Button 
                    className="step-two-button"
                    variant="primary"
                    onClick={this.continue}>
                    Registrar Cuenta
                  </Button>
                  <br/>
                  <br/>
                  <Button 
                    className="step-two-button"
                    variant="primary"
                    onClick={this.continue}>
                    Registrate con Google
                  </Button>
                  <br/>
       
                </Form>
              </Col>
            </Row>
          </div>
        );
    }
}

export default StepTwo
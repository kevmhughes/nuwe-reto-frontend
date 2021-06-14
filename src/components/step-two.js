/* eslint-disable no-alert */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { SidePanel } from './side-panel';
import './step-two.css';

export class StepTwo extends Component {
    continue = (e) => {
      e.preventDefault();
      this.props.nextStep();
    }

    vamosParaNuwe = (e) => {
      e.preventDefault();
      alert('Te has registrado correctamente');
    }

    back = (e) => {
      e.preventDefault();
      this.props.prevStep();
    }

    render() {
      const {
        fullName, password, email, handleChange,
      } = this.props;
      return (
        <div className="step-two-view">
          <SidePanel />
          <Row className="justify-content">
            <Row>
              <Col>
                <a onClick={this.back}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </a>
              </Col>
              <Col className="info-top">
                <p style={{ marginBottom: 0 }}>Paso 01/03</p>
                <p>Personal Info.</p>
                <br />
              </Col>
            </Row>
            <Row>
              <Col style={{ width: '250px' }}>
                <h1>Registra tu cuenta individual</h1>
                <br />
              </Col>
            </Row>

            <Col className="step-two-container">
              <Form>
                <Form.Group controlId="fullname">
                  <Form.Control
                    className="step-two-input"
                    type="username"
                    size="sm"
                    placeholder="Introduzca nombre completo"
                    value={fullName}
                    onChange={handleChange()}
                  />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Control
                    className="step-two-input"
                    type="email"
                    size="sm"
                    placeholder="Introduzca el email"
                    value={email}
                    onChange={handleChange()}
                  />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Control
                    className="step-two-input"
                    type="password"
                    size="sm"
                    placeholder="Introduzca contraseña"
                    value={password}
                    onChange={handleChange()}
                  />
                </Form.Group>

                <p>Acepto los terminos y condiciones</p>

                <Button
                  className="step-two-button"
                  variant="primary"
                  onClick={this.continue}
                >
                  Registrar Cuenta
                </Button>
                <br />
                <br />
                <Button
                  className="google-button"
                  variant="primary"
                  onClick={this.vamosParaNuwe}
                  style={{ display: 'flex' }}
                >
                  <div style={{ width: '33%' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="Google logo" style={{ height: '15px' }} />
                  </div>
                  {' '}
                  Registrate con Google
                </Button>
                <br />

              </Form>
            </Col>
          </Row>
        </div>
      );
    }
}

export default StepTwo;

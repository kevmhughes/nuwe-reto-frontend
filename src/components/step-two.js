/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */
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
import { faChevronLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { SidePanel } from './side-panel';
import './step-two.css';

export class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accept: true,
      clicked: true,
      eye: true,
      validated: false,
    };
    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // handles form validation
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      this.setState({ validated: true });
    }
    this.continue();
  }

  handleClick() {
    this.setState((prevState) => ({
      clicked: !prevState.clicked,
      eye: !prevState.eye,
    }));
  }

    goToNuwe = (e) => {
      e.preventDefault();
      alert('haciendo click aquí te llevaría al OAuth');
    }

    back = (e) => {
      e.preventDefault();
      this.props.prevStep();
    }

    continue() {
      const regex = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
      if (this.props.values.fullName.length >= 5 && this.props.values.password.length >= 8 && this.props.values.email.match(regex)) {
        this.props.nextStep();
      }
    }

    checkboxHandler() {
      this.setState((prevState) => ({
        accept: !prevState.accept,
      }));
    }

    render() {
      const { values, handleChange } = this.props;
      const btnClass = this.state.clicked ? 'password' : 'text';
      const btnEye = this.state.eye ? faEye : faEyeSlash;
      const btnEyeClass = this.state.eye ? 'eye' : 'eye-slash';
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
                <p>Info Personal</p>
                <br />
              </Col>
            </Row>
            <Row>
              <Col style={{ width: '250px' }}>
                <h3>Registra tu cuenta individual</h3>
                <p className="text-desktop">Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información.</p>
              </Col>
            </Row>

            <hr className="horiz-line" />

            <Col className="step-two-container">
              <Form
                noValidate
                validated={this.state.validated}
                onSubmit={this.handleSubmit}
              >
                <Form.Group controlId="fullname">
                  <Form.Label>Nombre completo*</Form.Label>
                  <Form.Control
                    className="step-two-input"
                    type="text"
                    size="sm"
                    placeholder="Introduzca el nombre completo"
                    value={values.fullName}
                    onChange={handleChange('fullName')}
                    minLength={5}
                    pattern="[a-zA-Z ]+"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Debe contener un mínimo de 5 caracteres.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Correo electrónico*</Form.Label>
                  <Form.Control
                    className="step-two-input"
                    type="email"
                    size="sm"
                    placeholder="Introduzca el email"
                    value={values.email}
                    onChange={handleChange('email')}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Utiliza un correo electrónico valido.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Contraseña*</Form.Label>
                  <span>
                    <FontAwesomeIcon icon={btnEye} className={btnEyeClass} onClick={this.handleClick} />
                  </span>
                  <Form.Control
                    className="step-two-input"
                    type={btnClass}
                    size="sm"
                    placeholder="Introduzca una contraseña"
                    value={values.password}
                    onChange={handleChange('password')}
                    minLength={8}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Debe contener un mínimo de 8 caracteres.
                  </Form.Control.Feedback>
                </Form.Group>

                <label htmlFor="agree" id="agree">
                  <input type="checkbox" className="checkbox" id="checkbox" onChange={this.checkboxHandler} />
                  {' '}
                  Acepto los terminos y condiciones
                </label>

                <Button
                  className="step-two-button"
                  variant="primary"
                  disabled={this.state.accept}
                  type="submit"
                  onClick={(e) => this.handleSubmit(e)}
                >
                  Registra Cuenta
                </Button>
                <br />
                <br />
                <Button
                  className="google-button"
                  variant="primary"
                  onClick={this.goToNuwe}
                  style={{ display: 'flex' }}
                  disabled={this.state.accept}
                >
                  <div style={{ width: '33%' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="Google logo" style={{ height: '15px' }} />
                  </div>
                  {' '}
                  Regístrate con Google
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

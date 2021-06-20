/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faLock } from '@fortawesome/free-solid-svg-icons';
import { SidePanel } from './side-panel';
import './step-two.css';

export class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
    };
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

    back = (e) => {
      e.preventDefault();
      this.props.prevStep();
    }

    continue() {
      const regexNumbers = /^[0-9]*$/;
      if ((this.props.values.telephoneNumber.length >= 6 && this.props.values.telephoneNumber.match(regexNumbers)) && this.props.values.address.length >= 1 && this.props.values.country.length >= 1) {
        this.props.nextStep();
      }
    }

    render() {
      const {
        values, handleChange,
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
                <p style={{ marginBottom: 0 }}>Paso 02/03</p>
                <p>Localización</p>
                <br />
              </Col>
            </Row>
            <Row>
              <Col style={{ width: '250px' }}>
                <h3>Completa tu perfil</h3>
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
                <Form.Group controlId="telephone">
                  <Form.Label>Número de teléfono</Form.Label>
                  <Form.Control
                    className="step-two-input"
                    type="tel"
                    size="sm"
                    placeholder="Introduzca el número de teléfono"
                    value={values.telephoneNumber}
                    onChange={handleChange('telephoneNumber')}
                    minLength={6}
                    pattern="[0-9]+"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Hay que rellenar este campo.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="address">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    className="step-two-input"
                    type="text"
                    size="sm"
                    placeholder="Introduzca la dirección completa"
                    value={values.address}
                    onChange={handleChange('address')}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Hay que rellenar este campo.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="country">
                  <Form.Label>País de residencia</Form.Label>
                  <Form.Control
                    className="step-two-input"
                    type="text"
                    size="sm"
                    placeholder="Selecciona uno"
                    value={values.country}
                    onChange={handleChange('country')}
                    pattern="[a-zA-Z]+"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Hay que rellenar este campo.
                  </Form.Control.Feedback>
                </Form.Group>
                <br />
                <Button
                  className="step-two-button"
                  variant="primary"
                  type="submit"
                  onClick={(e) => this.handleSubmit(e)}
                >
                  Guardar y continuar
                </Button>
                <br />
                <br />

              </Form>
            </Col>
            <div className="step-one-text">
              <p style={{ textAlign: 'center' }}>
                {' '}
                <FontAwesomeIcon icon={faLock} />
                {' '}
                Tu información es segura
              </p>
            </div>
          </Row>
        </div>
      );
    }
}

export default StepThree;

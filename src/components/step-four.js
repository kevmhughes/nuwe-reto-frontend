/* eslint-disable no-alert */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
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

export class StepFour extends Component {
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
      const { values, handleChange } = this.props;

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
                <p style={{ marginBottom: 0 }}>Paso 03/03</p>
                <p className="tarjeta-text">Verficación por tarjeta</p>
                <br />
              </Col>
            </Row>
            <Row>
              <Col style={{ width: '250px' }}>
                <h3>Verfica tu perfil</h3>
                <p className="text-desktop">Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información.</p>
              </Col>
            </Row>
            <hr className="horiz-line" />
            <Col className="step-two-container">
              <Form>
                <Form.Group controlId="card-number">
                  <Form.Label>Número de tarjeta</Form.Label>
                  <Form.Control
                    className="step-two-input"
                    type="card-number"
                    size="sm"
                    placeholder="Introduzca el número de tarjeta"
                    value={values.cardNumber}
                    onChange={handleChange('cardNumber')}
                  />
                </Form.Group>

                <Form.Group controlId="secret-number">
                  <Form.Label>Código secreto</Form.Label>
                  <Form.Control
                    className="step-two-input"
                    type="secret-number"
                    size="sm"
                    placeholder="Introduzca el codigo secreto"
                    value={values.secretCode}
                    onChange={handleChange('secretCode')}
                  />
                </Form.Group>
                <br />
                <Button
                  className="step-two-button"
                  variant="primary"
                  onClick={this.vamosParaNuwe}
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

export default StepFour;

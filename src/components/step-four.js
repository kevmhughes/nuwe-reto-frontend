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
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './step-four.css';

export class StepFour extends Component {
    continue = (e) => {
      e.preventDefault();
      this.props.nextStep();
    }

    back = (e) => {
      e.preventDefault();
      this.props.prevStep();
    }

    render() {
      const { cardNumber, secretCode, handleChange } = this.props;

      return (
        <div className="step-two-view">
          <Row className="justify-content">
            <a onClick={this.back}>
              <FontAwesomeIcon icon={faChevronLeft} className="mr-2 mr-sm-4 go-back" />
            </a>
            <Row>
              <Col className="info-top">
                <p>Paso 03/03</p>
                <p>Verficación por tarjeta</p>
                <br />
              </Col>
            </Row>
            <Row>
              <Col style={{ width: '250px' }}>
                <h1>Verfica tu perfil</h1>
                <br />
                // eslint-disable-next-line max-len
                <p>Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información</p>
              </Col>
            </Row>

            <Col className="step-two-container">
              <Form>
                <Form.Group controlId="card-number">
                  <Form.Control
                    className="step-two-input"
                    type="card-number"
                    size="sm"
                    placeholder="Introduzca número de tarjeta"
                    value={cardNumber}
                    onChange={handleChange()}
                  />
                </Form.Group>

                <Form.Group controlId="secret-number">
                  <Form.Control
                    className="step-two-input"
                    type="secret-number"
                    size="sm"
                    placeholder="Introduzca el codigo secreto"
                    value={secretCode}
                    onChange={handleChange()}
                  />
                </Form.Group>

                <Button
                  className="step-two-button"
                  variant="primary"
                >
                  Guardar y continuar
                </Button>
                <br />
                <br />

              </Form>
            </Col>
            <div className="step-one-text">
              <p style={{ textAlign: 'center' }}>Tu información es segura</p>
            </div>
          </Row>
        </div>
      );
    }
}

export default StepFour;

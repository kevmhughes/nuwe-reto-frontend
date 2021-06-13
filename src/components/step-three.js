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
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { SidePanel } from './side-panel';
import './step-two.css';

export class StepThree extends Component {
    continue = (e) => {
      e.preventDefault();
      this.props.nextStep();
    }

    back = (e) => {
      e.preventDefault();
      this.props.prevStep();
    }

    render() {
      const {
        telephoneNumber, country, address, handleChange,
      } = this.props;

      return (
        <div className="step-two-view">
          <SidePanel />
          <Row className="justify-content">
            <Row>
              <Col>
                <a onClick={this.back}>
                  <FontAwesomeIcon icon={faChevronLeft} className="mr-2 mr-sm-4 go-back" />
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
                <h1>Completa tu perfil</h1>
                <br />
                <p>Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información</p>
              </Col>
            </Row>

            <Col className="step-two-container">
              <Form>
                <Form.Group controlId="telephone">
                  <Form.Control
                    className="step-two-input"
                    type="telephone"
                    size="sm"
                    placeholder="Introduzca número de teléfono"
                    value={telephoneNumber}
                    onChange={handleChange()}
                  />
                </Form.Group>

                <Form.Group controlId="address">
                  <Form.Control
                    className="step-two-input"
                    type="address"
                    size="sm"
                    placeholder="Introduzca la dirección completa"
                    value={address}
                    onChange={handleChange()}
                  />
                </Form.Group>

                <Form.Group controlId="country">
                  <Form.Control
                    className="step-two-input"
                    type="country"
                    size="sm"
                    placeholder="Seleciona uno"
                    value={country}
                    onChange={handleChange()}
                  />
                </Form.Group>

                <Button
                  className="step-two-button"
                  variant="primary"
                  onClick={this.continue}
                >
                  Guardar y continuar
                </Button>
                <br />
                <br />

              </Form>
            </Col>
          </Row>
        </div>
      );
    }
}

export default StepThree;

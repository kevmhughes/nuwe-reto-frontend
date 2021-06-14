/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSquare } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { SidePanel } from './side-panel';
import './step-one.css';

export class StepOne extends Component {
    continue = (e) => {
      e.preventDefault();
      this.props.nextStep();
    }

    render() {
      return (
        <div className="flex-container">
          <SidePanel />
          <div className="panel-right">
            <h1 className="title">¡Únete a la comunidad!</h1>
            <p className="step-one-text">Para empezar, dinos que cuenta te gustaría abrir.</p>
            <Button
              variant="outline-primary"
              onClick={this.continue}
              className="step-one-button"
            >
              <div className="step-one-star">star</div>
              <div className="button-right">
                <p className="step-one-button-text">Developers</p>
                <p className="step-one-button-text-two">Cuenta personas para entrar en el mundo dev</p>
              </div>
            </Button>
            <Button
              variant="outline-primary"
              onClick={this.continue}
              className="step-one-button"
            >
              <div className="step-one-star">star</div>
              <div className="button-right">
                <p className="step-one-button-text">Business</p>
                <p className="step-one-button-text-two">Tienes o perteneces a una compañia</p>
              </div>
            </Button>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <p className="step-one-text-two">Ya tienes cuenta?</p>
              <a className="initiate-link">inicia sesión</a>
            </div>
          </div>
          <div className="panel-right-desktop">
            <div className="link-right">
              <p className="step-one-text-two">¿Ya tienes cuenta?</p>
              <a className="initiate-link">inicia sesión</a>
            </div>
            <div className="action-box">
              <h1 id="title">¡Únete a la comunidad!</h1>
              <p>Para empezar, dinos que cuenta te gustaría.</p>
              <Button
                variant="outline-primary"
                onClick={this.continue}
                className="step-one-button"
                style={{ height: '80px' }}
              >
                <div className="step-one-star"><FontAwesomeIcon icon={faSquare} className="square" /></div>
                <div className="button-right">
                  <p className="step-one-button-text">Developers</p>
                  <p className="step-one-button-text-two">Cuenta personas para entrar en el mundo dev</p>
                </div>
                <div className="awesome-arrow"><FontAwesomeIcon icon={faArrowRight} /></div>
              </Button>
              <Button
                variant="outline-primary"
                onClick={this.continue}
                className="step-one-button"
                style={{ height: '80px' }}
              >
                <div className="step-one-star">
                  <FontAwesomeIcon icon={faSquare} className="square" />
                </div>
                <div className="button-right">
                  <p className="step-one-button-text">Business</p>
                  <p className="step-one-button-text-two">Tienes o perteneces a una compañia</p>
                </div>
                <div className="awesome-arrow"><FontAwesomeIcon icon={faArrowRight} /></div>
              </Button>
            </div>
          </div>
        </div>
      );
    }
}

export default StepOne;

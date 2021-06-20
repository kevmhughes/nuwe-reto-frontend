/* eslint-disable no-console */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight, faSquare, faBriefcase, faUser,
} from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { SidePanel } from './side-panel';
import './step-one.css';

export class StepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: true,
      hoveredTwo: true,
      touched: true,
      touchedTwo: true,
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleHoverTwo = this.handleHoverTwo.bind(this);
    this.handleTouch = this.handleTouch.bind(this);
    this.handleTouchTwo = this.handleTouchTwo.bind(this);
  }

  handleHover() {
    this.setState({
      hovered: !this.state.hovered,
    });
  }

  handleHoverTwo() {
    this.setState({
      hoveredTwo: !this.state.hoveredTwo,
    });
  }

  handleTouchTwo() {
    this.setState({
      touchedTwo: !this.state.touchedTwo,
    });
  }

  handleTouch() {
    this.setState({
      touched: !this.state.touched,
    });
  }

    continue = (e) => {
      e.preventDefault();
      this.props.nextStep();
    }

    render() {
      const btnClass = this.state.hovered ? 'square' : 'square-two';
      const btnClassTwo = this.state.hovered ? 'awesome-arrow' : 'awesome-arrow-two';
      const btnClassThree = this.state.hoveredTwo ? 'square' : 'square-two';
      const btnClassFour = this.state.hoveredTwo ? 'awesome-arrow' : 'awesome-arrow-two';
      const btnClassFive = this.state.touchedTwo ? 'square' : 'square-two';
      const btnClassSix = this.state.touched ? 'square' : 'square-two';
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
              onTouchStart={this.handleTouchTwo}
              onTouchEnd={this.handleTouchTwo}
            >
              <div className="step-one-star">
                <FontAwesomeIcon icon={faSquare} className={btnClassFive} />
                <FontAwesomeIcon icon={faUser} className="user" />
              </div>
              <div className="button-right">
                <p className="step-one-button-text">Developers</p>
                <p className="step-one-button-text-two">Cuenta personas para entrar en el mundo dev</p>
              </div>
            </Button>
            <Button
              variant="outline-primary"
              onClick={this.continue}
              className="step-one-button"
              onTouchStart={this.handleTouch}
              onTouchEnd={this.handleTouch}
            >
              <div className="step-one-star">
                <FontAwesomeIcon icon={faSquare} className={btnClassSix} />
                <FontAwesomeIcon icon={faBriefcase} className="briefcase" />
              </div>
              <div className="button-right">
                <p className="step-one-button-text">Business</p>
                <p className="step-one-button-text-two">Tienes o perteneces a una compañia</p>
              </div>
            </Button>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
              <p className="step-one-text-two">Ya tienes cuenta?</p>
              <a href="https://nuwe.io/login/user" className="initiate-link">inicia sesión</a>
            </div>
          </div>
          <div className="panel-right-desktop">
            <div className="link-right">
              <p className="step-one-text-two">¿Ya tienes cuenta?</p>
              <a href="https://nuwe.io/login/user" className="initiate-link">inicia sesión</a>
            </div>
            <div className="action-box">
              <h1 id="title">¡Únete a la comunidad!</h1>
              <p>Para empezar, dinos que cuenta te gustaría.</p>
              <Button
                variant="outline-primary"
                onClick={this.continue}
                className="step-one-button"
                style={{ height: '80px' }}
                onMouseEnter={this.handleHoverTwo}
                onMouseLeave={this.handleHoverTwo}
              >
                <div className="step-one-star">
                  <FontAwesomeIcon icon={faSquare} className={btnClassThree} />
                  <FontAwesomeIcon icon={faUser} className="user" />
                </div>
                <div className="button-right">
                  <p className="step-one-button-text">Developers</p>
                  <p className="step-one-button-text-two">Cuenta personas para entrar en el mundo dev</p>
                </div>
                <div className={btnClassFour}><FontAwesomeIcon icon={faArrowRight} /></div>
              </Button>
              <Button
                variant="outline-primary"
                onClick={this.continue}
                className="step-one-button"
                style={{ height: '80px' }}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}
              >
                <div className="step-one-star">
                  <FontAwesomeIcon icon={faSquare} className={btnClass} />
                  <FontAwesomeIcon icon={faBriefcase} className="briefcase" />
                </div>
                <div className="button-right">
                  <p className="step-one-button-text">Business</p>
                  <p className="step-one-button-text-two">Tienes o perteneces a una compañia</p>
                </div>
                <div className={btnClassTwo}><FontAwesomeIcon icon={faArrowRight} /></div>
              </Button>
            </div>
          </div>
        </div>
      );
    }
}

export default StepOne;

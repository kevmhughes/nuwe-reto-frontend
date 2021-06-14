/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-use-before-define */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuoteLeft, faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import './side-panel.css';

export class SidePanel extends Component {
    continue = (e) => {
      e.preventDefault();
      this.props.nextStep();
    }

    render() {
      return (
        <div className="flex-container">
          <div className="panel-left">
            <div className="awesome-icon">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </div>
            <p className="panel-left-text">Nuwe es la plataforma que convierte el desarollo professional, la busqueda de trabajo y las conexiones de personas y empresas en un juego. Haciendo que puedas centrarte en lo que te gusta, programar, diseñar, crear, planear...</p>
            <div className="awesome-chevron">
              <FontAwesomeIcon className="awesome-rotate" icon={faChevronDown} />
            </div>
          </div>
        </div>
      );
    }
}

export default SidePanel;

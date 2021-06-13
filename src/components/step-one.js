import React, { Component } from 'react';
import image from '../assets/images/Background.png';
import { Button } from 'react-bootstrap';
import './step-one.css'


export class StepOne extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep()
    }

    render() {
        return (
            <div className="flex-container">
                <div className="panel-left" style={{ backgroundImage: `url(${image})`}} ><div></div><p className="panel-left-text">Nuwe es la plataforma que convierte el desarollo professional, la busqueda de trabajo y las conexiones de personas y empresas en un juego. Haciendo que puedas centrarte en lo que te gusta, programar, diseñar, crear, planear...</p></div>
                <div className="panel-right">
                <h1 className="title">¡Únete a la comunidad!</h1>
                <p className="step-one-text">Para empezar, dinos que cuenta te gustaría abrir.</p>
                <Button 
                variant="outline-primary"
                onClick={this.continue}
                className="step-one-button">
                    <div className="step-one-star">star</div>
                    <div className="button-right">
                    <p className="step-one-button-text">Developers</p>
                    <p className="step-one-button-text-two">Cuenta personas para entrar en el mundo dev</p>
                    </div>
                </Button>
                <Button 
                variant="outline-primary"
                onClick={this.continue}
                className="step-one-button">
                    <div className="step-one-star">star</div>
                    <div className="button-right">
                    <p className="step-one-button-text">Business</p>
                    <p className="step-one-button-text-two">Tienes o perteneces a una compañia</p>
                    </div>
                </Button>
                <div style={{display:"flex", justifyContent:"center", marginTop: "40px"}}><p className="step-one-text-two">Ya tienes cuenta?</p><p style={{color: "green", fontSize:"15px"}}>inicia sesión</p></div>
                </div>
                <div className="panel-right-desktop">
          <div className="link-right-">
          <p className="step-one-text-two">¿Ya tienes cuenta?</p>
          <p style={{color: "green", fontSize:"15px"}}>inicia sesión</p>
          </div>
          <div className="action-box">
            <h1 id="title">¡Únete a la comunidad!</h1>
            <p>Para empezar, dinos que cuenta te gustaría.</p>
            <Button 
                variant="outline-primary"
                onClick={this.continue}
                className="step-one-button"
                style={{height: "80px"}}>
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
                style={{height: "80px"}}>
                    <div className="step-one-star">star</div>
                    <div className="button-right">
                    <p className="step-one-button-text">Business</p>
                    <p className="step-one-button-text-two">Tienes o perteneces a una compañia</p>
                    </div>
                </Button>
          </div>
        </div>
            </div>
        )
    }
}

export default StepOne
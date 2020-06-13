import React, { Component } from 'react';
import './style.scss';


class Login extends Component {
    render () {
        return (
            <div className="app-container">
                <figure>
                    <img className="logo" src="jida.png" alt=""/>
                    <figcaption>
                        <h4>Prueba técnica de javascript
                            <small>¡&Eacute;xito y Good Coding!</small></h4>
                    </figcaption>
                </figure>
            </div>
        );

    }
}

export default Login;
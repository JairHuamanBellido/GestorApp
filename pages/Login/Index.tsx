import React, { Fragment } from "react";
import Link from "next/link";
import axios from "axios";
import Router from "next/router";
import userService from "../../src/services/user-service";
import "./Login.scss";

type UserCredentials = {
    username: string,
    password: string,
    error: boolean
}
export default class Login extends React.Component<{}, UserCredentials> {

    state: Readonly<UserCredentials> = {
        username: "",
        password: "",
        error: false
    }


    static async getInitialProps({ query }) {
        return { name: query }
    }
    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        this.setState(rest => ({
            ...rest,
            [name]: value
        }))
    }

    validateCredentials = async () => {

        const confirmation = await (userService.validateCredentials(this.state.username, this.state.password))
        if (confirmation) {
            this.setState({ error: false });

            Router.push("/home");
        }
        else {
            this.setState({ error: true });
        }

    }
    render() {

        return (
            <Fragment>
                <div className="login-container">


                    <header>
                        <img src="/assets/logo.png" width="96" height="96" alt="" />
                    </header>
                    <div className="login-main">
                        <div className="register-view">
                            <img src="/assets/ArtLogin.svg" alt="" />
                            <div className="info">
                                <h2>GestorApp</h2>
                                <p>Somos una plataforma que administra tus recibos por honorarios</p>
                            </div>


                            <div className="marketing">

                                <div className="item">
                                    <img src="/assets/WalletIcon.svg" alt="" className="icon" />
                                    <p>Guarda tus recibos por honorarios</p>
                                </div>
                                <div className="item">
                                    <img src="/assets/calculator.svg" alt="" className="icon" />
                                    <p>Herramientas Financieras</p>
                                </div>
                                <div className="item">
                                    <img src="/assets/chart.svg" alt="" className="icon" />
                                    <p>Estadísticas</p>
                                </div>


                            </div>
                        </div>
                        <div className="login-form">
                            <div>
                                <h1>Login</h1>

                                <div className="field-login">
                                    <label htmlFor="username">Usuario</label>
                                    <input type="text"
                                        id="username"
                                        name="username"
                                        value={this.state.username}
                                        placeholder="Ingrese su usuario"
                                        onChange={this.handleChange} />
                                </div>

                                <div className="field-login">
                                    <label htmlFor="password">Contraseña</label>
                                    <input type="password"
                                        id="password"
                                        name="password"
                                        value={this.state.password}
                                        placeholder="Ingrese su contraseña"
                                        onChange={this.handleChange} />
                                </div>
                                <div className="btn-group-login">
                                    <button onClick={this.validateCredentials}>Ingresar</button>
                                </div>
                                {this.state.error ?
                                    <p>Credenciales invalidas</p> : ''

                                }


                                <div className="register-direction">
                                    <p>Aún no te has registrado?</p>
                                    <Link href="/register">
                                        <button>Registrarme</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </Fragment>
        )
    }
}
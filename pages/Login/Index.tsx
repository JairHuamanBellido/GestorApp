import React, { Fragment } from "react";
import Link from "next/link";
import axios from "axios";
import { uri } from "../../src/uri";
import Router from "next/router";
import userService from "../../src/services/user-service";
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



    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
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
                <h1>Hola soy el w</h1>
                <Link href="/register">
                    <button>Register</button>
                </Link>
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


            </Fragment>
        )
    }
}
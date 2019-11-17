import React, { Fragment } from "react";
import Link from "next/link";

import Router from "next/router";
import userService from "../src/services/user-service";

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
                        <img src="/static/logo.png" width="96" height="96" alt="" />
                    </header>
                    <div className="login-main">
                        <div className="register-view">
                            <img src="/static/ArtLogin.svg" alt="" />
                            <div className="info">
                                <h2>GestorApp</h2>
                                <p>Somos una plataforma que administra tus recibos por honorarios</p>
                            </div>


                            <div className="marketing">

                                <div className="item">
                                    <img src="/static/WalletIcon.svg" alt="" className="icon" />
                                    <p>Guarda tus recibos por honorarios</p>
                                </div>
                                <div className="item">
                                    <img src="/static/calculator.svg" alt="" className="icon" />
                                    <p>Herramientas Financieras</p>
                                </div>
                                <div className="item">
                                    <img src="/static/chart.svg" alt="" className="icon" />
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
                <style jsx global>{`
 
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;

}

.login-container{
    padding: 2em;
}
.login-container .field-login{
    display: flex;
    flex-direction: column;
    margin: 1em 0;
}
.login-container .field-login label{
    font-size: 16px;
    font-weight: 600;
    color: #222222;
    margin-bottom: .5em;
}

.login-container .field-login input{
    width: 360px;
    border-radius: 4px;
    border: 1px solid #afafaf;
    padding: 12px ;
    font-size: 18px;
}
.login-container .field-login input:focus{
    outline: none;
    border: 1px solid #5067DB;
    box-shadow: 0 0 12px #5067DB22;
}

.login-container .field-login input::placeholder{
    color: #767676 !important;
}

.login-container .btn-group-login button{
    width: 360px;
    border: none;
    border-radius: 4px;
    background: #5067DB;
    padding: 16px 24px;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;
}

.login-container .register-direction{
    display: flex;
    margin-top: 3em;

}
.login-container .register-direction button{
    background: transparent;
    color: #5067DB;
    font-weight: 600;
    border: none;
    font-size: 22px;
    margin-left: .5em;
}

.login-main{
    display: flex;


}

.login-main > div{
    width: 50%;

}

.login-main .register-view{
    padding-left: 5em;

}


.login-main .register-view .info{
    margin: 1em 0;

}
.login-main .register-view .marketing{
    display: flex;
    flex-direction: column; 
    margin-top: 3em;

}

.login-main .register-view .marketing .item{
    display: flex;
    align-items: center;
    margin: 1em 0;
}

.login-main .register-view .marketing .item img{
    margin-right: 1em;
}

.login-form{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding-left: 12em;
}
      `}</style>
            </Fragment>
        )
    }
}
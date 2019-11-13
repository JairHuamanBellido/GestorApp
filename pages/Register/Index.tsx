import React, { useLayoutEffect } from "react";

import "./Register.scss";
import userService from "../../src/services/user-service";
// Sate
type UserRegister = {
    ruc: string,
    name: string,
    lastName: string,
    username: string,
    password: string,
    age: number,
    email: string,
    phone: number,
    address: string,
    district: string,
    companyName: string
}
export default class Register extends React.Component<{}, UserRegister> {


    state: Readonly<UserRegister> = {
        ruc: "",
        name: "",
        lastName: "",
        username: "",
        password: "",
        age: undefined,
        companyName: "",
        email: "",
        phone: undefined,
        address: "",
        district: "",
    }

    submitForm = async () => {
        await userService.register(this.state);
        





    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        this.setState(rest => ({
            ...rest,
            [name]: value
        }))
    }

    uner = (e) => {
        console.log(e)
    }
    render() {
        return (

            <div className="register-container">

                <div className="header">
                    <div className="log">
                        <img src="/assets/logo-white.png" width="96" height="96" alt="" />
                    </div>
                    <div className="title">
                        <h1>Registro</h1>

                    </div>
                </div>

                <div className="form-register">

                    <div className="field-group">
                        <div className="field">
                            <label>Nombres</label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                placeholder="Ingrese sus nombres"

                            />

                        </div>
                        <div className="field">
                            <label>Apellidos</label>

                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                placeholder="Ingrese sus apellidos"

                            />

                        </div>


                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label>Ruc</label>
                            <input
                                type="text"
                                id="RUC"
                                name="ruc"
                                value={this.state.ruc}
                                onChange={this.handleChange}
                                placeholder="Ingrese su ruc"
                                onFocus={this.uner}
                            />

                        </div>

                        <div className="field">
                            <label>Razon Social</label>

                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={this.state.companyName}
                                onChange={this.handleChange}
                                placeholder="Ingrese sus apellidos"

                            />

                        </div>
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label>Edad</label>

                            <input
                                type="number"
                                id="age"
                                name="age"
                                value={this.state.age}
                                onChange={this.handleChange}
                                placeholder="Ingrese su edad"

                            />

                        </div>
                        <div className="field">
                            <label>Email</label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="Ingrese su email"

                            />

                        </div>
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label>Usuario</label>

                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                                placeholder="Ingrese su usuario"

                            />

                        </div>
                        <div className="field">
                            <label>Contraseña</label>

                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                placeholder="Ingrese su contraseña"

                            />

                        </div>

                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label>Numero de celular</label>

                            <input
                                type="number"
                                id="phone"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleChange}
                                placeholder="Ingrese su numero de celular"

                            />

                        </div>

                        <div className="field">
                            <label>Dirección</label>

                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={this.state.address}
                                onChange={this.handleChange}
                                placeholder="Ingrese su direccion"

                            />

                        </div>
                       

                    </div>
                    <div className="field-group">
                    <div className="field">
                            <label>Distrito</label>

                            <input
                                type="text"
                                id="district"
                                name="district"
                                value={this.state.district}
                                onChange={this.handleChange}
                                placeholder="Ingrese su distrito"

                            />

                        </div>
                    </div>
                    <div className="submit-register">
                        <button onClick={this.submitForm}>Registrar</button>
                    </div>


                </div>
            </div>


        )
    }
}
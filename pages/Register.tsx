import React, { useLayoutEffect, Fragment } from "react";


import userService from "../src/services/user-service";
import Link from "next/link";



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
            <Fragment>
                <div className="register-container">

                    <div className="header">
                        <div className="log">
                            <Link href="/login">
                                <img src="/static/logo-white.png" width="96" height="96" alt="" />
                            </Link>
                        </div>
                        <div className="title">
                            <h1>Registro</h1>

                        </div>
                    </div>

                    <div className="form-register">
                        <div className="form-camp">
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
                                        maxLength={9}
                                        className="ruc-input"
                                        type="text"
                                        id="RUC"
                                        name="ruc"
                                        value={this.state.ruc}
                                        onChange={this.handleChange}
                                        placeholder="Ingrese su ruc"
                                        onFocus={this.uner}
                                    />
                                    <p>20</p>

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
                        </div>
                        <div className="submit-register">
                            <button onClick={this.submitForm}>Registrar</button>
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
  body{
      
      margin:0;
  }
  
  ::placeholder{
      color: rgba(0,0,0,.5) !important;
  }
  .form-camp{
      overflow:auto;
      height:700px;
  }
  .register-container{
      padding: 24px;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      background: url('/static/RegisterBG.png');
      background-size:container;
      background-position:center center;
  }
  .register-container .header > div{
      width: 50%;
  }
  .register-container .header {
      display: flex;
      align-items: center;
      position: relative;
  }
  
  .register-container .form-register{
      width: 500px;
      margin: 0 0 0 60%;
  }
  .register-container .field{
      display: flex;
      flex-direction: column;
      margin: 1em;
      position:relative;
      
  }
  .register-container .field label{
      margin-bottom: .5em;
      font-size: 16px;
      font-weight: 600;
      color: #222222;
  }
  .register-container h1{
      text-align:left;
      color: #121212;
      position: absolute;
      top: 50%;
      left: 65%;
      transform: translate(-50%, -65%);
  }
  
  .register-container .form-register .field-group 
  {
      display: flex;
        flex-direction:column;
  }
  
  .register-container .field input{
      width: 360px;
      padding: 12px 18px;
      color: #333333;
      background: rgba(0,0,0,.02);
      border-radius: 4px;
      font-size: 18px;
      border: 1px solid rgba(255,255,255,.3);
      //border: 1px solid #ff4476;
  }
  
  
  .register-container .field input:focus{
      outline: none;
      border: 1px solid #34a3ff;
  }
  
  .register-container button{
      background: #5067DB;
      color: #ffffff;
      text-align: center;
      padding: 12px 18px;
      border-radius: 5px;
      border: none;
      font-size: 18px;
      font-weight: 600;
      width: 400px;
  }
  
  .register-container .submit-register{
      margin-top: 1em;
      display: flex;
      justify-content: center;
  }

  .ruc-input{
    padding-left: 48px !important;
}

.field p{
    position: absolute;
    top: 52%;
    left: 4%;
    color: #212121 !important;
}

      `}</style>

            </Fragment>
        )
    }
}
import React from "react";

// Sate
type billDTO = {
    
    fechaEmision: Date,
    fechaPago: Date,
    totalRecibir: Float64Array,
    diasYear: number,
    concepto: string,
    periodoDeTasa: string,
    tasaEfectiva: Float64Array,
    fechaDescuento: Date

}


export default class Recibo extends React.Component<{}, billDTO>{

    state: Readonly<billDTO> = {
        ruc: "",
        name: "",
        lastName: "",
        username: "",
        password: "",
        age: undefined,
        razon_social: "",
        email: "",
        phone: undefined,
        address: "",
        district: ""
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    render() {
        return (

            <div>
                <h1>Hola soy para subir el registro</h1>
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
        )
    }
}
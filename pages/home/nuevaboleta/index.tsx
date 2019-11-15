import React, { Fragment } from "react";
import userService from "../../../src/services/user-service";
import billService from "../../../src/services/bill-service";
import Layout from "../../../components/layout/Layout";
import sampleAppContext, { UserContextProvider } from "../../../components/userProvider/UserContext";
import Route from 'next/router'
import "./nuevaboleta.scss";

type BillDto = {

    userRuc: string,
    companyRuc: string,
    releaseDate: string,
    payDay: string,
    totalAmount: any,
    daysPerYear: number,
    tax: number,
    discountDate: string,
    concept: string,
    tep: string,
    nameCompany: string,
    addressCompany: string,
    districtCompany: string
}



export default class NuevaRecibo extends React.Component<{}, BillDto>{

    state: Readonly<BillDto> = {
        userRuc: "",
        companyRuc: "",
        releaseDate: undefined,
        payDay: undefined,
        totalAmount: undefined,
        daysPerYear: 360,
        tax: undefined,
        discountDate: undefined,
        concept: "",
        tep: "",
        nameCompany: "",
        addressCompany: "",
        districtCompany: ""

    }


    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(rest => ({
            ...rest,
            [name]: value
        }))
    }

    componentDidMount = () => {
        this.setState({ userRuc: userService.getRuc() });
    }


     submit = async() => {


        billService.create(this.state);
        this.state = {
            userRuc: "",
            companyRuc: "",
            releaseDate: undefined,
            payDay: undefined,
            totalAmount: undefined,
            daysPerYear: 360,
            tax: undefined,
            discountDate: undefined,
            concept: "",
            tep: "",
            nameCompany: "",
            addressCompany: "",
            districtCompany: ""
        }
        let username = localStorage.getItem("username");
        let password = localStorage.getItem("password");
        await userService.validateCredentials(username,password).then ( data=>{

            

            Route.push('/home/recibos');
        })

    }
    render() {
        return (

            <Fragment>
                <UserContextProvider value={sampleAppContext}>
                    <Layout>
                        <div className="nuevaboleta-form">
                            <h1>
                                Estas agregando una nueva boleta
                            </h1>
                            <div className="first-group">
                                <div className="group-field">

                                    <div className="field-bill">
                                        <label >Fecha de emision</label>
                                        <input type="date"
                                            id="releaseDate"
                                            name="releaseDate"
                                            value={this.state.releaseDate}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="field-bill">
                                        <label >Fecha de pago</label>
                                        <input type="date"
                                            id="payDay"
                                            name="payDay"
                                            value={this.state.payDay}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="field-bill">
                                        <label >Fecha de descuento</label>
                                        <input type="date"
                                            id="discountDate"
                                            name="discountDate"
                                            value={this.state.discountDate}
                                            onChange={this.handleChange}
                                        />

                                    </div>
                                </div>
                                <div className="field-bill">
                                    <label >Monto a recibir</label>
                                    <input type="number"
                                        id="totalAmount"
                                        name="totalAmount"
                                        value={this.state.totalAmount}
                                        onChange={this.handleChange}
                                    />
                                </div>

                            </div>

                            <h3>Datos de la empresa</h3>
                            <div className="field-bill">
                                <label >Ruc de la empresa</label>
                                <input type="string"
                                    id="companyRuc"
                                    name="companyRuc"
                                    value={this.state.companyRuc}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="field-bill">
                                <label >Razón social </label>
                                <input type="string"
                                    id="nameCompany"
                                    name="nameCompany"
                                    value={this.state.nameCompany}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="field-bill">
                                <label >Direccion </label>
                                <input type="string"
                                    id="addressCompany"
                                    name="addressCompany"
                                    value={this.state.addressCompany}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="field-bill">
                                <label >Distrito </label>
                                <input type="string"
                                    id="districtCompany"
                                    name="districtCompany"
                                    value={this.state.districtCompany}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="field-bill">
                                <label >Tasa efectiva</label>
                                <input type="number"
                                    id="tax"
                                    name="tax"
                                    value={this.state.tax}
                                    onChange={this.handleChange}
                                />
                                %
                            </div>
                            <div className="field-bill">
                                <label >Plazo de tasa</label>
                                <select name="tep" id="tep" onChange={this.handleChange} value={this.state.tep}>
                                    <option value="Diario">Diario</option>
                                    <option value="Quincenal">Quincenal</option>
                                    <option value="Mensual">Mensual</option>
                                    <option value="Bimestral">Bimestral</option>
                                    <option value="Trimestral">Trimestral</option>
                                    <option value="Cuatrimestral">Cuatrimestral</option>
                                    <option value="Semestral">Semestral</option>
                                    <option value="Anual">Anual</option>


                                </select>

                            </div>


                            <div className="field-bill">
                                <label >Concepto</label>
                                <textarea
                                    id="concept"
                                    name="concept"
                                    value={this.state.concept}
                                    onChange={this.handleChange}
                                />

                            </div>



                            <button className="btn" onClick={this.submit}>Submit</button>
                        </div>

                    </Layout>
                </UserContextProvider>
            </Fragment>

        )
    }
}
import React, { Fragment } from "react";
import userService from "../../../src/services/user-service";
import billService from "../../../src/services/bill-service";
import Layout from "../../../components/layout/Layout";
import sampleAppContext, { UserContextProvider, findCompanyByRuc } from "../../../components/userProvider/UserContext";
import Route from 'next/router'
import "./nuevaboleta.scss";
import ModalCompany from "../../../components/companyModal/CompanyModal";

const DICCIONARY_NOMINAL = {

    "Diario": 1,
    "Quincenal": 15,
    "Mensual": 30,
    "Bimestral": 60,
    "Trimestral": 90,
    "Cuatrimestral": 120,
    "Semestral": 180,
}

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
    districtCompany: string,
    typeTax: string,
    valueP: string,
    isModalOpen: boolean
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
        districtCompany: "",
        typeTax: "Efectiva",
        valueP: undefined,
        isModalOpen: null
    }


    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;


        this.setState(rest => ({
            ...rest,
            [name]: value
        }))
        console.log("cambiando");
    }

    componentDidMount = () => {
        this.setState({ userRuc: userService.getRuc() });
    }


    submit = async () => {



        billService.create(this.state);

        let username = localStorage.getItem("username");
        let password = localStorage.getItem("password");
        console.log(this.state.tax);
        await userService.validateCredentials(username, password).then(data => {



            Route.push('/home/recibos');
        })

    }

    openModal = () => {
        this.setState({ isModalOpen: true })
    }
    closeModal = () => {
        this.setState({ isModalOpen: null })

    }

    companyExist = () => {
        this.setState({ isModalOpen: false })
        this.setState({ companyRuc: sampleAppContext.companies[0].ruc.slice(2,9) })
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
                            <div className="group-btn-company">

                                <button className="newcompany" onClick={this.openModal}>Agregar una nueva Empresa</button>
                                <button className="companyExist" onClick={this.companyExist}>Escoger una empresa ya existente</button>
                            </div>


                            <div className="decision">
                                {this.state.isModalOpen === true ?

                                    <ModalCompany
                                        companyRuc={this.state.companyRuc}
                                        nameCompany={this.state.nameCompany}
                                        addressCompany={this.state.addressCompany}
                                        districtCompany={this.state.districtCompany}
                                        handleChange={this.handleChange}
                                        open={this.state.isModalOpen}
                                        closeModal={this.closeModal}

                                    /> : this.state.isModalOpen === false ?
                                        <select name="companyRuc" id="companyRuc" onChange={this.handleChange} value={this.state.companyRuc}>
                                            {sampleAppContext.companies.map((company, index) => (
                                                <option key={index} value={company.ruc.slice(2,11)}> {company.name} </option>
                                            ))}
                                        </select> :
                                        null
                                }

                            </div>
                            <div className="field-bill">
                                <label>Eliga el tipo de tasa</label>
                                <select name="typeTax" onChange={this.handleChange} value={this.state.typeTax} id="typeTax">
                                    <option value="Efectiva">Efectiva</option>
                                    <option value="Nominal">Nominal</option>
                                </select>
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
                                <label >Tasa {this.state.typeTax}</label>
                                <input type="number"
                                    id="tax"
                                    name="tax"
                                    value={this.state.tax}
                                    onChange={this.handleChange}
                                />
                                %
                            </div>
                            {
                                this.state.typeTax === "Nominal" && (
                                    <div className="field-bill">
                                        <label htmlFor="">Periodo de capitalización</label>
                                        <select name="valueP" id="valueP" onChange={this.handleChange} value={this.state.valueP}>
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
                                )
                            }

                            <div className="field-bill">
                                <label >Concepto</label>
                                <textarea
                                    id="concept"
                                    name="concept"
                                    value={this.state.concept}
                                    onChange={this.handleChange}
                                />

                            </div>


                            <div className="btn-group">

                                <button className="btn" onClick={this.submit}>Agregar recibo</button>
                            </div>
                        </div>

                    </Layout>
                </UserContextProvider>
            </Fragment>

        )
    }
}
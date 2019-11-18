import React, { Fragment } from "react";
import userService from "../src/services/user-service";
import billService from "../src/services/bill-service";
import Layout from "../components/layout/Layout";
import sampleAppContext, { UserContextProvider, findCompanyByRuc } from "../components/userProvider/UserContext";
import Route from 'next/router'

import ModalCompany from "../components/companyModal/CompanyModal";



const MONEY = {
    0: 'Soles',
    1: 'Dolares'
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
    isModalOpen: boolean,
    avatarIcon: string,
    load: boolean,
    active:number,
    money:number
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
        tep: "Diario",
        nameCompany: "",
        addressCompany: "",
        districtCompany: "",
        typeTax: "Efectiva",
        valueP: undefined,
        isModalOpen: false,
        avatarIcon: null,
        load: false,
        active:null,
        money:null
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

    componentDidMount = async () => {

        let username = localStorage.getItem("username")
        let password = localStorage.getItem("password")
        await userService.validateCredentials(username, password).then(() => {
            this.setState({ userRuc: userService.getRuc() });
            this.setState({ load: true })

        })
    }


    submit = async () => {



        billService.create(this.state);

        let username = localStorage.getItem("username");
        let password = localStorage.getItem("password");
        console.log(this.state.tax);
        await userService.validateCredentials(username, password).then(data => {



            Route.push('/recibos');
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
        this.setState({ companyRuc: sampleAppContext.companies[0].ruc.slice(2, 9) })
    }


    changeIcon = (iconText: string) => {
        console.log("Cambiando icion");
        console.log(iconText);
        this.setState({ avatarIcon: iconText });
    }

    toggle = (number: number) => {

        this.setState({ active: number }, () => {
            console.log(this.state.active);
        })

        

    }

    setOpacity = (number: number) => {
        if (this.state.active === number) {

            return 1
        }
        else {
            return 0.3
        }
    }
    render() {
        if (this.state.load) {
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
                                    <div className="field-w" style={{display:"flex", alignItems:"center"}}>
                                        <div style={{display:"flex",flexDirection: "column"}}>
                                            <label >Monto a recibir</label>
                                            <input type="number"
                                                id="totalAmount"
                                                name="totalAmount"
                                                value={this.state.totalAmount}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div style={{display:"flex",marginLeft:"2em",marginTop:"1.3em"}}>
                                            <button className="Soles-btn" onClick={()=>this.toggle(0)} 
                                            style={{opacity:this.setOpacity(0)}}>Soles</button>
                                            <button className="Dolares-btn" onClick={()=>this.toggle(1)} style={{opacity:this.setOpacity(1)}}  >Dolares</button>
                                        </div>
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
                                            companyExist={this.companyExist}
                                            avatarIcon={this.state.avatarIcon}
                                            changeIcon={this.changeIcon}

                                        /> : this.state.isModalOpen === false ?
                                            <select name="companyRuc" id="companyRuc" onChange={this.handleChange} value={this.state.companyRuc}>
                                                {sampleAppContext.companies.map((company, index) => (

                                                    <option key={index} value={company.ruc.slice(2, 11)}>

                                                        {company.name}

                                                    </option>


                                                ))}
                                            </select> :
                                            <div className="company-selected">
                                                <img width="32" src={`/static/${this.state.avatarIcon}.svg`} alt="" />
                                                <h2>{this.state.nameCompany}</h2>
                                                <button onClick={this.openModal}>Editar</button>
                                            </div>

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
                            <style jsx>{`

@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    outline:none;

}
.Soles-btn,.Dolares-btn{
    margin: 0 1em;
    border:none;
    width:240px;
    padding:12px 24px;
    border-radius: 6px;
    font-size : 18px;
    font-weight: 600;
    cursor:pointer;
    color:#ffffff;
    transition: all .2s ease-in-out;
}
.Soles-btn:hover{
    opacity:1;
}

.Soles-btn{
    background: #5067DB;
}
.Dolares-btn{
    background: #33dd88;
}
.nuevaboleta-form{
    display: flex;
    flex-direction: column;
}

.container-bills{
    display: block;
    margin-top: 1em !important;

}   
.field-bill{
    display: flex;
    flex-direction: column;
    margin: 0 3em 1em 0;
}
label{
    font-size: 22px;
    font-weight: 600;
    color: #272727;
}
input,select{
    width: 250px;
    font-size: 20px;
    color: #565656;
    font-size: 20px;
    border-radius: 6px;
    padding: 12px 24px;
    border: 1px solid #bfbfbf;
}

textarea{
    width: 500px;
    height: 300px;
    border-radius: 4px;
    border: 1px solid #bfbfbf;
    font-size: 18px;
    padding: 16px;
    color: #444444;

}



.first-group .group-field{
    display: flex;

    
}

.recibos-container{width: 100%;}

.recibos-container .header-bill-view{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 4em;
    align-items: center;
}



.recibos-container .header-bill-view h2{
    font-size: 28px;
    font-weight: 600;
    color: #121212;
}
.recibos-container .header-bill-view p{
    margin-top: .5em;
    font-size: 22px;
    color: #666666;
}
.recibos-container .header-bill-view a{
    padding: 24px 12px;
    background: #4FDBD8;
    color: #ffffff;
    width: 200px;
    border-radius: 6px;
    text-decoration: none;
    box-shadow: 0 12px 24px #4FDBD844;
    text-align: center;
}

.btn-group{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em 0 2em 0;
}
.btn-group button{
    padding: 24px 12px;
    background: #4FDBD8;
    color: #ffffff;
    width: 360px;
    border-radius: 6px;
    text-decoration: none;
    box-shadow: 0 12px 24px #4FDBD844;
    text-align: center;
    border: none;
    font-size: 22px;
    font-weight: 600;
    cursor: pointer;
}

.group-btn-company{
    display: flex;
    margin: 1em 0;
}
.group-btn-company .newcompany{
    padding: 12px 12px;
    background: #4FDBD8;
    color: #ffffff;
    width: 360px;
    border-radius: 6px;
    text-decoration: none;
    box-shadow: 0 12px 24px #4FDBD844;
    text-align: center;
    border: none;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    
}


.group-btn-company > button{
    margin:  0  1em;
}

.group-btn-company .companyExist{
    padding: 12px 12px;
    background: #5067DB;
    color: #ffffff;
    width: 360px;
    border-radius: 6px;
    text-decoration: none;
    box-shadow: 0 12px 24px #5067DB44;
    text-align: center;
    border: none;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
}
.decision{
    margin: 1em 0;
}


.company-selected{
    width: fit-content;
    padding: 12px 24px;
    border-radius: 6px;
    display: flex;
    border: 1px solid #5067DB;
    align-items:center;
}

.company-selected h2 {
    margin: 0 1em;
    font-size: 20px;
    font-weigth:600;
}
.company-selected button{
    background: none;
    color: #5067DB;
    font-weight: 600;
    font-size: 16px;
    border: none;
    cursor: pointer;
}
        }
      `}</style>
                        </Layout>
                    </UserContextProvider>
                </Fragment>

            )
        }
        return <h1>Cargando</h1>;
    }

}
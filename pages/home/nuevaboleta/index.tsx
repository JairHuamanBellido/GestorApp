import React, { Fragment } from "react";
import userService from "../../../src/services/user-service";
import billService from "../../../src/services/bill-service";



type BillDto = {

    userRuc: string,
    companyRuc: string,
    releaseDate: string,
    payDay: string,
    totalAmount: any,
    daysPerYear: number,
    tax: number,
    discountDate: string,
    concept: string
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
        concept: ""
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


    submit = () => {


        billService.create(this.state);
    }
    render() {
        return (
            <Fragment>
                <h1>
                    estas agregando una nueva boleta
            </h1>
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
                    <label >Monto a recibir</label>
                    <input type="number"
                        id="totalAmount"
                        name="totalAmount"
                        value={this.state.totalAmount}
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
                    <label >Fecha de descuento</label>
                    <input type="date"
                        id="discountDate"
                        name="discountDate"
                        value={this.state.discountDate}
                        onChange={this.handleChange}
                    />

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

            </Fragment>

        )
    }
}
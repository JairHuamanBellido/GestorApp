import Layout from '../components/layout/Layout'
import userContext, { UserContextProvider, findBillById } from '../components/userProvider/UserContext'
import React from 'react';
import Route from "next/router";
import userService from '../src/services/user-service';

const DICCIONARY_DATES = {
    1: "Enero",
    2: "Febrero",
    3: "Marzo",
    4: "Abril",
    5: "Mayo",
    6: "Junio",
    7: "Julio",
    8: "Agosto",
    9: "Setiembre",
    10: "Octubre",
    11: "Noviembre",
    12: "Diciembre"
}


export default class BillDetailView extends React.Component {


    state = {
        bill: null,
        load: false
    }

    componentWillMount() {


    }


    getYear = (date) => {
        return date.slice(0, 4);
    }

    getMonth = (date) => {
        return DICCIONARY_DATES[date.slice(5, 7)];
    }

    getDay = (date) => {
        return date.slice(8, 10);
    }



    async componentDidMount() {

        let username = localStorage.getItem("username");
        let passowrd = localStorage.getItem("password");

        await userService.validateCredentials(username, passowrd).then(() => {


            let another = (document.URL.slice(-24));

            let q = findBillById(another);
            console.log("Boleta encontrada:  " + q);
            this.setState({ bill: q })
            this.setState({load:true})

        })


        //console.log(this.state.bill.payDay.slice(8, 10));


    }

    finalTEA(tea) {
        return (parseFloat(tea) * 100);
    }
    render() {

        if (this.state.load) {
            return (
                <UserContextProvider value={userContext}>
                    <Layout>
                        <div className="layout-billdetails">

                            <div className="firstCol">
                                <h1>{userContext.name}</h1>
                                <h3>{userContext.address}</h3>

                                <p>Teléfono <strong>{userContext.phone}</strong></p>
                                <p>Recibí de <strong>{this.state.bill.company.name}</strong></p>
                                <p>Identificado con numero RUC <strong> {this.state.bill.company.ruc}</strong></p>
                                <p>Domiciliado en  <strong> {this.state.bill.company.address}</strong></p>
                                <p>La suma de <strong>{this.state.bill.totalAmount}</strong></p>
                                <p>Por concepto de <strong>{this.state.bill.concept}</strong></p>
                                <p>Fecha de Emisión <strong>{this.getDay(this.state.bill.releaseDate)} de {this.getMonth(this.state.bill.releaseDate)} de {this.getYear(this.state.bill.releaseDate)}</strong></p>
                                <p>Fecha de Pago <strong>{this.getDay(this.state.bill.payDay)} de {this.getMonth(this.state.bill.payDay)} de {this.getYear(this.state.bill.payDay)}</strong></p>
                                <p>Fecha de Descuento <strong>{this.getDay(this.state.bill.discountDate)} de {this.getMonth(this.state.bill.discountDate)} de {this.getYear(this.state.bill.discountDate)}</strong></p>

                            </div>

                            <div className="secondCol">

                                <div className="header-col">
                                    <h2>RUC {this.state.bill.userRuc}</h2>
                                    <p>Nro {this.state.bill._id}</p>
                                </div>
                                <div className="details-secondCol">
                                    <div className="div">
                                        <p>Recibos por honorarios <strong> {this.state.bill.totalAmount} </strong> </p>

                                        <p className="less">Retencion <strong>{this.state.bill.retention} </strong> </p>
                                        <p className="less">Descuento <strong> {this.state.bill.discount}</strong> </p>
                                        <p>Total  <strong> {this.state.bill.totalAmmountFinal}</strong> </p>

                                        <p id="TCEA">TCEA <strong> {this.finalTEA(this.state.bill.tcea)} % </strong> </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <style jsx>{`

@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;

}
.layout-billdetails{
    display: flex;
    width: 100%;
}

.layout-billdetails  > div{
    width: 40%;

}



.layout-billdetails .secondCol .header-col{
    text-align: center;
    margin-bottom: 2em;
    
}


.firstCol p{
    margin: .5em 0;
}
.firstCol h3{
    opacity: .87;
    margin-bottom: 2em;
}

.details-secondCol{
    text-align: left;
    display: flex;

    justify-content: center;
    align-items: center;

}

.details-secondCol .div p{
    margin: .5em;
    display: flex;
    justify-content: space-between;
    font-size: 22px;
}

.details-secondCol .div p strong{
    margin-left: 1em;
}
.details-secondCol .div .less{
    color:  #ff4343;
}

.details-secondCol .div #TCEA{
    margin-top: 2em;
}
      `}</style>
                    </Layout>
                </UserContextProvider>
            )
        }

        return null;
    }

}

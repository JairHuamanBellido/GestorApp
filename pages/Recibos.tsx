import React, { Fragment } from "react";
import Layout from "../components/layout/Layout";
import sampleAppContext, { UserContextProvider } from "../components/userProvider/UserContext";
import Bills from "../components/Bill/Bills";
import Link from "next/link";

import userService from "../src/services/user-service";
import currentUser from "../components/userProvider/UserContext";
export default class RecibosPorHonorarios extends React.Component {

    state = {
        load: false
    }

    async componentDidMount() {
        console.log("Se realizo el compinentes de recibos")
        let username = localStorage.getItem("username");
        let password = localStorage.getItem("password")
        await userService.validateCredentials(username, password).then(() => {

            this.setState({ load: true })
        })

    }
    render() {
        if (this.state.load) {

            return (

                <Fragment>
                    <UserContextProvider value={sampleAppContext}>
                        <Layout>
                            <div className="recibos-container">
                                <div className="header-bill-view">
                                    <div className="info-v1">
                                        <h2>Recibos por honorarios</h2>
                                        <p>Actualmente has emitido {currentUser.bills.length} boletas</p>
                                    </div>
                                    <Link href="/nuevaboleta">
                                        <a style={{fontWeight:600}}> Nuevo Recibo</a>
                                    </Link>
                                </div>
                                <div className="container-bills">
                                    <Bills />

                                </div>

                            </div>
                            <style jsx>{`
 .recibos-container{
    display: flex;
    flex-direction: column;
}
.header-bill-view{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 48px;
}
.header-bill-view a{
    padding: 12px 12px;
    background: #4FDBD8;
    color: #ffffff;
    width: 240px;
    border-radius: 6px;
    text-decoration: none;
    box-shadow: 0 12px 24px #4FDBD844;
    text-align: center;
    border: none;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
}

      `}</style>
                        </Layout>
                        
                    </UserContextProvider>
                </Fragment>
            )
        } else {
            return (
                <h1>Esta cargando ...</h1>
            )
        }
    }
}
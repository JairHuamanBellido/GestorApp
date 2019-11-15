import React, { Fragment } from "react";
import Layout from "../../../components/layout/Layout";
import sampleAppContext, { UserContextProvider } from "../../../components/userProvider/UserContext";
import Bills from "../../../components/Bill/Bills";
import Link from "next/link";
import "../nuevaboleta/nuevaboleta.scss"
import userService from "../../../src/services/user-service";
import currentUser from "../../../components/userProvider/UserContext";
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
                                    <Link href="/home/nuevaBoleta">
                                        <a> Nuevo</a>
                                    </Link>
                                </div>
                                <div className="container-bills">
                                    <Bills />

                                </div>

                            </div>
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
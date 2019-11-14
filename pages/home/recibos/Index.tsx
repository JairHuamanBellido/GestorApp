import React, { Fragment } from "react";
import Layout from "../../../components/layout/Layout";
import sampleAppContext, { UserContextProvider } from "../../../components/userProvider/UserContext";
import Bills from "../../../components/Bill/Bills";
import Link from "next/link";

export default class RecibosPorHonorarios extends React.Component {
    render() {
        return (
            <Fragment>
                <UserContextProvider value={sampleAppContext}>
                    <Layout>
                        <div className="container-bills">
                            <Bills />

                        </div>
                        <Link href="/home/nuevaBoleta">
                            <a> Nueva Boleta</a>
                        </Link>
                    </Layout>
                </UserContextProvider>
            </Fragment>
        )
    }
}
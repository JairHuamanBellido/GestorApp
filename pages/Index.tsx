import React from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import Route from "next/router";
export default class Index extends React.Component {

    componentDidMount(){
        Route.push("/login");
    }
    render() {
        return (
            <Layout>
                <h2>Hola</h2>
            </Layout>


        )
    }
}
import React, { Fragment } from "react";
import Router, { withRouter } from "next/router";
import userService from "../../src/services/user-service";

import Nav from "../../components/nav/Nav";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import Header from "../../components/header/header";
import sampleAppContext, { UserContextProvider, updateName } from "../../components/userProvider/UserContext";



export default class Home extends React.Component<{}, {}> {




    componentDidMount() {


        updateName(localStorage.getItem("name"));
        if (localStorage.getItem("token") != null) {
            userService.updateCredentials();
            this.setState({ validate: true });

        }
        else {
            this.setState({ validate: false });
            Router.push("/login");
        }


    }



    render() {
        return (
            <Fragment>
                <UserContextProvider value={sampleAppContext}>
                    <Layout>
                        <div>
                            <h2>Hola soy le home</h2>
                        </div>
                    </Layout>
                </UserContextProvider>
            </Fragment>
















        )
    }
}   
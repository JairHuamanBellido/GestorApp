import React, { Fragment } from "react";
import Router, { withRouter } from "next/router";
import userService from "../../src/services/user-service";

import Nav from "../../components/nav/Nav";
import Layout from "../../components/layout/Layout";

import sampleAppContext, { UserContextProvider  } from "../../components/userProvider/UserContext";
import billService from "../../src/services/bill-service";



export default class Home extends React.Component<{}, {}> {




    async componentDidMount() {


        if (localStorage.getItem("token") != null) {
            this.setState({ validate: true });

        }
        else {
            this.setState({ validate: false });
            Router.push("/login");
        }

        await billService.getBills();


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
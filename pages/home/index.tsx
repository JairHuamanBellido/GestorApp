import React, { Fragment } from "react";
import Router, { withRouter } from "next/router";
import userService from "../../src/services/user-service";


type ga = {
    validate: boolean,

}
export default class Home extends React.Component<{}, ga> {


    state: Readonly<ga> = {
        validate: false
    }

  

    componentDidMount() {
        
        

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
                {this.state.validate ?
                    <h1>Hola este este  home</h1>
                    

                    













                    : ''
                }

            </Fragment>
        )
    }
}   
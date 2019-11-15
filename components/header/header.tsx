import React, { Fragment } from "react";

import "./Header.scss"
import { UserContextConsume } from "../userProvider/UserContext";
import userService from "../../src/services/user-service";
export default class Header extends React.Component {
    state = {
        loaded: false
    }

    async componentDidMount() {
        let username = localStorage.getItem("username");
        let password = localStorage.getItem("password");
        await userService.validateCredentials(username, password).then(() => {
            this.setState({ loaded: true })
        });
    }
    render() {

        return (
            <Fragment>
                <UserContextConsume>
                    {user => user && (
                        <div className="header">
                            <div className="logo">
                                <img src="/assets/logo.png" alt="" width="96" height="96" />
                            </div>
                            <div className="avatar">
                                {this.state.loaded &&
                                    <Fragment>
                                        <img src="https://img2.freepng.es/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg" width="64" height="64" alt="" />
                                        <h2>Mi {user.name}</h2>
                                    </Fragment>}

                            </div>
                        </div>
                    )}

                </UserContextConsume>
            </Fragment>


        )
    }
}
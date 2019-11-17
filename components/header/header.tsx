import React, { Fragment } from "react";

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
                                <img src="/static/logo.png" alt="" width="96" height="96" />
                            </div>
                            <div className="avatar">
                                {this.state.loaded &&
                                    <Fragment>
                                        <img src="https://img2.freepng.es/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg" width="64" height="64" alt="" />
                                        <h2> {user.name}</h2>
                                    </Fragment>}

                            </div>
                        </div>
                        
                    )}

                </UserContextConsume>
                <style jsx>{`

@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;

}
.header{
    width: 100%;
    padding: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.avatar{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.avatar img{
    margin-right: 1em   ;
}
      `}</style>
            </Fragment>


        )
    }
}
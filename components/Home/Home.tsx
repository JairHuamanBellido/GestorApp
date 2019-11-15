import React, { Fragment } from "react";
import { UserContextConsume } from "../userProvider/UserContext";

export default class HomeView extends React.Component {



    render() {


        return (
            <Fragment>
                <UserContextConsume>
                    {user=> user &&(
                        <h2>Total ganado {user.totalGain}</h2>
                    )}

                </UserContextConsume>
            </Fragment>
        )
    }
}
import React, { Fragment } from "react";
import { UserContextConsume } from "../userProvider/UserContext";
import "./home.scss";
export default class HomeView extends React.Component {



    render() {


        return (
            <Fragment>
                <UserContextConsume>
                    {user => user && (
                        <div className="info-home-v012">
                            <h2>Monto Total por servicios realizados</h2>
                            <p> {user.totalGain}</p>
                        </div>
                    )}

                </UserContextConsume>
            </Fragment>
        )
    }
}
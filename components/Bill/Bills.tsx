import React, { Fragment } from "react";
import { UserContextConsume } from "../userProvider/UserContext";
import Bill from "./Bill";

import "./bill.scss"


export default class Bills extends React.Component {

    render() {
        return (
            <Fragment>
                <div className="list-bills">
                    <UserContextConsume>

                        {user => user && (

                            user.bills.map((bill, index) => (
                                
                                    <Bill key={index} companyName={bill.company.name} companyRuc={bill.companyRuc} totalAmmountFinal={bill.totalAmmountFinal} />
                               
                            ))

                        )}

                    </UserContextConsume>

                </div>


            </Fragment>
        )
    }


}
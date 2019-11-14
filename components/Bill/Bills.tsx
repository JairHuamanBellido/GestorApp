import React, { Fragment } from "react";
import { UserContextConsume } from "../userProvider/UserContext";
import Bill from "./Bill";




export default class Bills extends React.Component {

    render() {
        return (
            <Fragment>
                <UserContextConsume>

                    {user => user && (

                        user.bills.map((bill,index) => (
                            <Bill key={index} companyRuc={bill.companyRuc} totalAmmountFinal={bill.totalAmmountFinal} />
                        ))

                    )}




                </UserContextConsume>




            </Fragment>
        )
    }


}
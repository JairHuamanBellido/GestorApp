import React, { Fragment } from "react";
import { UserContextConsume } from "../userProvider/UserContext";
import Bill from "./Bill";




export default class Bills extends React.Component {

    render() {
        return (
            <Fragment>
                <div className="list-bills">
                    <UserContextConsume>

                        {user => user && (

                            user.bills.map((bill, index) => (

                                <Bill key={index} avatarIcon={bill.company.avatarIcon} id={bill._id} companyName={bill.company.name} companyRuc={bill.companyRuc} totalAmmountFinal={bill.totalAmmountFinal} />

                            ))

                        )}

                    </UserContextConsume>

                </div>
                <style jsx global>{`

@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;

}

.list-bills{
    display: flex;
    flex-wrap: wrap;
}


      `}</style>

            </Fragment>
        )
    }


}
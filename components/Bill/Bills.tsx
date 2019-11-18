import React, { Fragment } from "react";
import { UserContextConsume, findCompanyByRuc } from "../userProvider/UserContext";
import Bill from "./Bill";




export default class Bills extends React.Component {

    render() {
        return (
            <Fragment>
                <div className="list-bills">
                    <UserContextConsume>

                        {user => user && (

                            user.bills.map((bill, index) => (
                                <Fragment>
                                    <Bill key={index} avatarIcon={findCompanyByRuc(bill.companyRuc).avatarIcon} id={bill._id} companyName={findCompanyByRuc(bill.companyRuc).name} companyRuc={bill.companyRuc} totalAmmountFinal={bill.totalAmmountFinal} />
                                </Fragment>
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

import React from "react";
import "./bill.scss";

type BillProp = {
    companyRuc: string,
    totalAmmountFinal: number,
    companyName: string
}
export default class Bill extends React.Component<BillProp, {}>{

    render() {
        return (

            <div className="bill-item">
                <h1>{this.props.companyName}</h1>
                <p>S/. {this.props.totalAmmountFinal}</p>
            </div>

        )
    }

}
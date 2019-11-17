
import React, { Fragment } from "react";
import "./bill.scss";
import Link from "next/link";

type BillProp = {
    id: string;
    companyRuc: string,
    totalAmmountFinal: number,
    companyName: string
}
export default class Bill extends React.Component<BillProp, {}>{

    render() {
        return (
            <Fragment>
                <Link href="/home/billDetails/[id]" as={`/home/billDetails/${this.props.id}`}>
                    <div className="bill-item">
                        <h1>{this.props.companyName}</h1>
                        <p>S/. {this.props.totalAmmountFinal}</p>
                    </div>
                </Link>
            </Fragment>

        )
    }

}
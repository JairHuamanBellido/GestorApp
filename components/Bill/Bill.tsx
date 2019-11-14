
import React from "react";

type BillProp = {
    companyRuc: string,
    totalAmmountFinal :  number
}
export default class Bill extends React.Component<BillProp,{}>{

    render(){
        return(

            <div className="bill-item">
                <h1>{this.props.companyRuc}</h1>
                <p>{this.props.totalAmmountFinal}</p>
            </div>

        )
    }


    
}
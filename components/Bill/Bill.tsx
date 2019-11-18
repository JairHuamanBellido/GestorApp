
import React, { Fragment } from "react";
import Link from "next/link";

type BillProp = {
    id: string;
    companyRuc: string,
    totalAmmountFinal: number,
    companyName: string,
    avatarIcon: string
}
export default class Bill extends React.Component<BillProp, {}>{

    render() {
        return (
            <Fragment>
                <Link href="/[id]" as={`/${this.props.id}`}>
                    <div className="bill-item">
                        <div className="title">
                            <h1>{this.props.companyName}</h1>
                            <img src={`/static/${this.props.avatarIcon}.svg`} width="36" alt="" />
                        </div>
                        <p>S/. {this.props.totalAmmountFinal}</p>


                    </div>

                </Link>
                <style jsx >{`

@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;

}



.bill-item{
    margin:  24px 16px  ;
    padding: 24px 4em 24px 1em;
    box-shadow: 0 0 24px rgba(0,0,0,.07);
    border-radius: 6px;
    width: fit-content;
    cursor: pointer;

}

.bill-item h1{
    font-size: 24px;
    font-weight: 600;
    color: #48bfbc;  
}
.bill-item p{
    margin-top: .5em;
    font-size: 22px;
    color: #444444;
}
.bill-item .title{
    display: flex;
    align-items: center;
}
.bill-item .title img{
    margin-left: 1em;
}
      `}</style>

            </Fragment>

        )
    }

}
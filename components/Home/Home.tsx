import React, { Fragment } from "react";
import { UserContextConsume, totalAmmout, totalTax, getLastBills, HightBill } from "../userProvider/UserContext";
import userService from "../../src/services/user-service";
import { url } from "inspector";
import Link from "next/link";
export default class HomeView extends React.Component {



    state = {
        load: false,
        totalGain: 0,
        totalTax: 0,
        lastBills: [],
        bestBill: undefined
    }

    async componentDidMount() {
        let username = localStorage.getItem("username");
        let password = localStorage.getItem("password");

        await userService.validateCredentials(username, password).then(() => {

            this.setState({ totalGain: totalAmmout(), totalTax: totalTax(), lastBills: getLastBills(), bestBill: HightBill(), load: true })
            console.log(this.state.bestBill);
        })
    }

    render() {


        if (this.state.load) {
            return (
                <Fragment>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="info-home-v012">
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div className="home-header totalAmmout">

                                    <h2>Monto Total por servicios realizados</h2>
                                    <p> S/. {this.state.totalGain}</p>
                                </div>
                                <div className="home-header totalTax">
                                    <h2>Intereses Totales</h2>
                                    <p>S/. {this.state.totalTax}</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: "1.5em", display: "flex" }}>
                            <div className="lastBills">
                                <h2 style={{ opacity: 0.8, fontSize: "24px", fontWeight: 600 }}>Últimos recibos </h2>
                                {this.state.lastBills.map((bill, index) => (
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <div className="card-lastBill" key={index}>
                                            <img style={{ marginRight: "1em" }} src={`/static/${bill.company.avatarIcon}.svg`} width="36" alt="" />
                                            <div>
                                                <h2 style={{ fontSize: "22px" }}>{bill.company.name} </h2>
                                                <p>S/. {bill.totalAmmountFinal}</p>

                                            </div>

                                        </div>

                                    </div>
                                ))}
                            </div>
                            <div style={{ marginLeft: "100px" }} className="bestBill">
                                <h2 style={{ color: "#5067DB", fontSize: "24px", fontWeight: 600 }} >Destacado</h2>
                                {this.state.lastBills.length > 0 ?
                                <div style={{ display:"flex",alignItems:"flex-start",justifyContent:"center",textAlign:"center" , marginTop: "30px", width: "341px", height: "464px", borderRadius: "8px" }} className="card-bestBill">
                                    <div className="content" style={{marginTop:"48px"}}>
                                        <h2 style={{color:"#0CFEF8",fontSize:"28px",fontWeight:600}}>Enhorabuena</h2>
                                        <p  style={{color:"#ffffff",fontSize:"20px",fontWeight:300}}>El ingreso más alto del mes</p>
                                        <p style={{color:"#ffffff",marginTop:"64px",fontWeight:700,fontSize:"41px"}}>S/. {this.state.bestBill.totalAmmountFinal}</p>
                                        <p style={{color:"#ffffff",opacity:0.67}}>{this.state.bestBill.company.name}</p>

                                        <Link href="/[id]" as={`/${this.state.bestBill._id}`}>
                                            <div style={{marginTop:"3em"}}>
                                            <a style={{ cursor:"pointer", textDecoration:"none",borderRadius:"4px", padding:"12px 48px",width:"250px",background:"#4FDBD8",color:"#ffffff"}}>Ver Detalles</a>
                                            </div>
                                        </Link>
                                    </div>
                                </div> : <h4 style={{fontWeight:400,color:"#676767"}}>No tienes ningun recibo por honorario</h4>
                                }
                            </div>
                        </div>
                    </div>
                    <style jsx global>{`
    
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;

}
body:{
    margin:0;
    

}
.card-bestBill{
    background: url('static/CardBestBill.png');
    background-position:center center;
}

.card-lastBill{
    display:flex;
    align-items:center;
    margin: 1.2em 0;
    box-shadow: 0 0 12px rgba(0,0,0,.04);
    width: 350px;
    padding:12px 24px;
    border-radius: 4px;
}

.home-header{
    margin-right:3em;
}
.totalTax p{
    color:#FF5454 !important;
}
.info-home-v012{
    display: flex;
    flex-direction: column;

}
.info-home-v012 h2{
    font-size: 22px;
    color: #252525;
    font-weight: 300;
}
.info-home-v012 p{
    color: #5067DB;
    font-weight: 600;
    font-size: 36px;
}
      `}</style>
                </Fragment>
            )
        }
        return <h2>Cargando ...</h2>
    }


}
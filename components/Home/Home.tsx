import React, { Fragment } from "react";
import { UserContextConsume, totalAmmout } from "../userProvider/UserContext";
import userService from "../../src/services/user-service";
export default class HomeView extends React.Component {



    state= {
        load:false,
        totalGain : 0
    }

    async componentDidMount(){
        let username =  localStorage.getItem("username");
        let password =  localStorage.getItem("password");

        await userService.validateCredentials(username,password).then ( ()=>{
            this.setState({load:true})
            this.setState({totalGain:totalAmmout()})
        })
    }

    render() {


        if(this.state.load){
        return (
            <Fragment>
                
                        <div className="info-home-v012">
                            <h2>Monto Total por servicios realizados</h2>
                            <p> S/. {this.state.totalGain}</p>
                        </div>
                    

                
                <style jsx>{`
    
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;

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
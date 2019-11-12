import React from "react";
import Nav from "../nav/Nav";


export default class Layout extends React.Component {



    render() {
        return (
            <div>
               <Nav/>
               {this.props.children}
            </div>
        )
    }

}
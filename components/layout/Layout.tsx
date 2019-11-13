import React from "react";
import Nav from "../nav/Nav";
import Header from "../header/header";

import "./Layout.scss"
export default class Layout extends React.Component {



    render() {
        return (
            <div>

                <Header />
                <div className="body">
                    <Nav />
                    {this.props.children}
                </div>
            </div>
        )
    }

}
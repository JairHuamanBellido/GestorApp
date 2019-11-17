import React from "react";
import Nav from "../nav/Nav";
import Header from "../header/header";

export default class Layout extends React.Component {



    render() {
        return (
            <div>

                <Header />
                <div className="body">
                    <Nav />
                    {this.props.children}
                </div>
                <style jsx>{`
 
@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;

}

.body{
    display: flex;
}
      `}</style>
            </div>
        )
    }

}
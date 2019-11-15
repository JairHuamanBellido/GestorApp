import React from "react";
import Link from "next/link";
import "./Nav.scss";
import Route from "next/router";
export default class Nav extends React.Component {



    state = {
        active: 0
    }


    componentDidMount() {
        this.setState({ active: 0 });
    }


    toggle = (number) => {

        this.setState({ active: number })
     
        console.log(Route.pathname);
    }

    setOpacity(number: number) {
        if (this.state.active === number) {

            return 1
        }
        else {
            return 0.3
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav>
                        <Link  href="/home">
                            <div id="0" style={{ opacity: this.setOpacity(0) }} onClick={() => this.toggle(0)} className="nav-item">
                                <img src="/assets/home-icon.svg" onClick={() => this.toggle(0)} alt="" />
                                <a id="home-link" onClick={() => this.toggle(0)}>Inicio</a>

                            </div>
                        </Link>

                        <Link href="/home/recibos">
                            <div style={{ opacity: this.setOpacity(1) }} onClick={() => this.toggle(1)} id="1" className="nav-item">
                                <img src="/assets/walle-home.svg" alt="" onClick={() => this.toggle(1)} />
                                <a id="recibos-link" onClick={() => this.toggle(1)}>Recibos por honorarios</a>

                            </div>
                        </Link>

                        {/* <Link href="/home/recibos">
                            <div style={{ opacity: this.setOpacity(2) }} onClick={() => this.toggle(2)} id="2" className="nav-item">
                                <img src="/assets/empresa-home.svg" onClick={() => this.toggle(2)} alt="" />
                                <a id="empresa-link" onClick={() => this.toggle(2)}>Empresas</a>
                            </div>
                        </Link> */}

                    </nav>


                </header>
            </div>
        )
    }

}
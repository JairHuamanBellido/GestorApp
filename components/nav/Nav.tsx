import React from "react";
import Link from "next/link";
import "./Nav.scss";

export default class Nav extends React.Component {



    render() {
        return (
            <div>
                <header>
                    <nav>
                        <Link href="/home">
                            <a>Home</a>
                        </Link>
                        
                        <Link href="/home/recibos">
                            <a>Recibos por honorarios</a>
                        </Link>
                        
                    </nav>
                </header>
            </div>
        )
    }

}
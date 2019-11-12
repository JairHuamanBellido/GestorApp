import React from "react";
import Link from "next/link";


export default class Nav extends React.Component {



    render() {
        return (
            <div>
                <header>
                    <nav>
                        <Link href="/">
                            <a>Home</a>
                        </Link>{' '}
                        |{' '}
                        <Link href="/home/nuevaboleta">
                            <a>Recibos por honorarios</a>
                        </Link>{' '}
                        |{' '}
                    </nav>
                </header>
            </div>
        )
    }

}
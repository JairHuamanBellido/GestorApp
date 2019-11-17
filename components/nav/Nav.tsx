import React from "react";
import Link from "next/link";
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
                        <Link href="/home">
                            <div id="0" style={{ opacity: this.setOpacity(0) }}
                                onClick={() => this.toggle(0)}
                                className="nav-item">

                                <img src="/static/home-icon.svg" onClick={() => this.toggle(0)} alt="" />
                                <a id="home-link" onClick={() => this.toggle(0)}>Inicio</a>

                            </div>
                        </Link>

                        <Link href="/recibos">
                            <div style={{ opacity: this.setOpacity(1) }}
                                onClick={() => this.toggle(1)} id="1"
                                className="nav-item">
                                    
                                <img src="/static/walle-home.svg" alt="" onClick={() => this.toggle(1)} />
                                <a id="recibos-link" onClick={() => this.toggle(1)}>Recibos por honorarios</a>

                            </div>
                        </Link>

                        {/* <Link href="/home/recibos">
                            <div style={{ opacity: this.setOpacity(2) }} onClick={() => this.toggle(2)} id="2" className="nav-item">
                                <img src="/static/empresa-home.svg" onClick={() => this.toggle(2)} alt="" />
                                <a id="empresa-link" onClick={() => this.toggle(2)}>Empresas</a>
                            </div>
                        </Link> */}

                    </nav>


                </header>

                <style jsx>{`

@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;

}
header{
    padding: 0 48px;
}
header nav{
    display: flex;
    flex-direction: column;
}




header nav a {
    font-size: 20px;
    font-weight: 600;
}

header nav .nav-item{
    
    cursor: pointer;
    opacity: .3;
    display: flex;
    align-items: center;
    margin: 1em 0;
    transition: all .2s ease-in;
   
}

header nav .nav-item:hover{
    opacity: 1;
}
header nav .nav-item img{
    margin-right: 12px;
}
#home-link{
    color: #5067DB;

}
#recibos-link{
    color: #4FDBD8;

}
#empresa-link{
    color: #681DFF;

}


      `}</style>
            </div>
        )
    }

}
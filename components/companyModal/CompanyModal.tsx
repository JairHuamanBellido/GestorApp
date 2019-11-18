import React, { Fragment } from "react";



const DICCIONARY_ICON = {
    0: "Salud",
    1: "Tecnologia",
    2: "Banco",
    3: "Software",
    4: "Tienda"
}

type Props = {
    companyRuc: string,
    nameCompany: string,
    addressCompany: string,
    districtCompany: string,
    handleChange: any,
    closeModal: any,
    open: boolean,
    avatarIcon: string,
    changeIcon: any,
    companyExist:any
}
export default class ModalCompany extends React.Component<Props, {}>{

    state = {
        active: 0,
        urlImg: ''
    }

    toggle = (number: number) => {

        this.setState({ active: number }, () => {
            console.log(this.state.active);
        })

        setTimeout(() => {
            this.props.changeIcon(DICCIONARY_ICON[this.state.active]);
        }, 500);

    }

    setOpacity = (number: number) => {
        if (this.state.active === number) {

            return 1
        }
        else {
            return 0.3
        }
    }


    render() {

        if (this.props.open) {
            return (

                <Fragment>
                    <div className="containerModal">

                        <div className="card-modal">
                            <div className="header">

                                <img src="/static/ModalCompany.svg" alt="" />
                                <h2>Empresa</h2>
                                <p>Complete los sigueintes campos acerca de la empresa que requirió sus servicios</p>
                            </div>

                            <div className="list-icons">
                                <img id="Salud" style={{ opacity: this.setOpacity(0) }}
                                    onClick={() => this.toggle(0)}
                                    title="Salud"
                                    src="/static/Salud.svg"
                                    width="48" alt="Salud"
                                />

                                <img id="Tecnologia" style={{ opacity: this.setOpacity(1) }}
                                    onClick={() => this.toggle(1)}
                                    title="Tecnología"
                                    src="/static/Tecnologia.svg"
                                    width="48" alt="Tecnología"
                                />

                                <img id="Banco" style={{ opacity: this.setOpacity(2) }}
                                    onClick={() => this.toggle(2)}
                                    title="Banco"
                                    src="/static/Banco.svg"
                                    width="48" alt="Banco"
                                />


                                <img id="Software" style={{ opacity: this.setOpacity(3) }}
                                    onClick={() => this.toggle(3)}
                                    title="Software"
                                    src="/static/Software.svg"
                                    width="48" alt="Software"
                                />


                                <img id="Tienda" style={{ opacity: this.setOpacity(4) }}
                                    onClick={() => this.toggle(4)}
                                    title="Tienda"
                                    src="/static/Tienda.svg"
                                    width="48" alt="Tienda"
                                />

                            </div>
                            <div className="form">

                                <div className="field-group">

                                    <div className="field">
                                        <label htmlFor="">Ruc de la empresa</label>
                                        <input maxLength={9} className="ruc-input" placeholder="Ingrese el ruc de la empresa" type="text" name="companyRuc" id="companyRuc" value={this.props.companyRuc} onChange={this.props.handleChange} />
                                        <p>20</p>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="">Nombre de la empresa</label>
                                        <input placeholder="Ingrese el nombre de la empresa" type="text" name="nameCompany" id="nameCompany" value={this.props.nameCompany} onChange={this.props.handleChange} />

                                    </div>
                                </div>
                                <div className="field-group">

                                    <div className="field">
                                        <label htmlFor="">Direccion</label>
                                        <input placeholder="Ingrese la direccion de la empresa" type="text" name="addressCompany" id="addressCompany" value={this.props.addressCompany} onChange={this.props.handleChange} />

                                    </div>

                                    <div className="field">
                                        <label htmlFor="">Distrito</label>
                                        <input type="text" name="districtCompany" id="districtCompany" value={this.props.districtCompany} onChange={this.props.handleChange} placeholder="Ingrese el distrito de la empresa" />

                                    </div>
                                </div>
                                <div className="submitForm">
                                    <button className="btn-addCompany" onClick={this.props.closeModal}>Agregar</button>
                                    <button className="btn-closeModal" onClick={this.props.companyExist}>Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style jsx global>{`

@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;

}
.submitForm{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
}
.btn-closeModal{
    background:none;
    border:none;
    color: #666666;
    font-weight:600;
    font-size : 16px;
    cursor:pointer;

}
.containerModal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn-addCompany{
    
    background: #5067DB;
    color:#ffffff;
    font-weight:600;
    font-size: 18px;
    border: none;
    padding: 16px 24px;
    cursor: pointer;
    border-radius: 4px;
    width: 250px;
    margin:  1em;
}
.list-icons{
    display: flex;
    justify-content: center;
    align-items: center;
    margin:1em 0;
}

.list-icons img{
    cursor: pointer;
    margin: 0 1em;
    opacity:  .3;
    transition: all .2s ease-in-out;
}
.list-icons img:hover{
    opacity: 1;
}
.containerModal .card-modal{
    padding: 24px;
    border-radius: 6px;
    width: 50%;
    height: 900px;
    display: flex;
    flex-direction: column;
    background: white;
}

.card-modal .header{
    display: flex;
    flex-direction: column;
    text-align: center;
}

.form{
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
}

.form .field-group{
    display: flex;
    justify-content: space-evenly;
    margin: 1em 0;
}

.form .field-group .field{
    display: flex;
    flex-direction: column;
    position: relative;
}
.form .field-group .field label{
    margin-bottom: .75em;
}
.form .field-group .field input{
    width: 300px !important;
    color: #222222;
    padding: 12px 18px;
    border-radius: 4px;
    font-size: 18px;
    border:1px solid #cfcfcf;
}

.ruc-input{
    padding-left: 48px !important;
}

.field p{
    position: absolute;
    top: 58%;
    left: 4%;
    color: #222222 !important;
}
      `}</style>

                </Fragment>

            )
        }
        else {
            return null;
        }
    }
}
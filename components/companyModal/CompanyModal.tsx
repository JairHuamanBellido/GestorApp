import React, { Fragment } from "react";
import './companyModel.scss'
type Props = {
    companyRuc: string,
    nameCompany: string,
    addressCompany: string,
    districtCompany: string,
    handleChange: any,
    closeModal: any,
    open: boolean
}
export default class ModalCompany extends React.Component<Props, {}>{

    render() {

        if (this.props.open) {
            return (

                <Fragment>
                    <div className="containerModal">

                        <div className="card-modal">
                            <div className="header">

                                <img src="/assets/ModalCompany.svg" alt="" />
                                <h2>Empresa</h2>
                                <p>Complete los sigueintes campos acerca de la empresa que requirió sus servicios</p>
                            </div>

                            <div className="form">

                                <div className="field-group">

                                    <div className="field">
                                        <label htmlFor="">Ruc de la empresa</label>
                                        <input  maxLength={9} className="ruc-input" placeholder="Ingrese el ruc de la empresa" type="text" name="companyRuc" id="companyRuc" value={this.props.companyRuc} onChange={this.props.handleChange} />
                                        <p>20</p>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="">Nombre de la empresa</label>
                                        <input  placeholder="Ingrese el nombre de la empresa" type="text" name="nameCompany" id="nameCompany" value={this.props.nameCompany} onChange={this.props.handleChange} />

                                    </div>
                                </div>
                                <div className="field-group">

                                    <div className="field">
                                        <label htmlFor="">Direccion</label>
                                        <input placeholder="Ingrese la direccion de la empresa" type="text" name="addressCompany" id="addressCompany" value={this.props.addressCompany} onChange={this.props.handleChange} />

                                    </div>

                                    <div className="field">
                                        <label htmlFor="">Distrito</label>
                                        <input  type="text" name="districtCompany" id="districtCompany" value={this.props.districtCompany} onChange={this.props.handleChange} placeholder="Ingrese el distrito de la empresa" />

                                    </div>
                                </div>
                                <div className="submitForm">
                                    <button>Agregar</button>
                                    <button onClick={this.props.closeModal}>Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>



                </Fragment>

            )
        }
        else {
            return null;
        }
    }
}
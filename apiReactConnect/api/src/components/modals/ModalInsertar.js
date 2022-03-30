import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

class ModalInsertar extends Component {
  constructor() {
    super();
    this.insertar = this.insertar.bind(this);
    this.changeManzana = this.changeManzana.bind(this);
    this.changeLote = this.changeLote.bind(this);
    this.changeUsuario = this.changeUsuario.bind(this);
    this.changeNombre = this.changeNombre.bind(this);
    this.changeDomicilio = this.changeDomicilio.bind(this);
    this.changeColonia = this.changeColonia.bind(this);
    this.changeTarifa = this.changeTarifa.bind(this);
    this.changeEstado = this.changeEstado.bind(this);
    this.changeFecha_descuento = this.changeFecha_descuento.bind(this);
    this.changeImporte_descuento = this.changeImporte_descuento.bind(this);
    this.changeSaldo = this.changeSaldo.bind(this);
    this.changeFecha_ultimo_pago = this.changeFecha_ultimo_pago.bind(this);
  }

  changeManzana(event) {
    this.props.changeManzana(event.target.value);
  }
  changeLote(event) {
    this.props.changeLote(event.target.value);
  }
  changeUsuario(event) {
    this.props.changeUsuario(event.target.value);
  }
  changeNombre(event) {
    this.props.changeNombre(event.target.value);
  }
  changeDomicilio(event) {
    this.props.changeDomicilio(event.target.value);
  }
  changeColonia(event) {
    this.props.changeColonia(event.target.value);
  }
  changeTarifa(event) {
    this.props.changeTarifa(event.target.value);
  }
  changeEstado(event) {
    this.props.changeEstado(event.target.value);
  }
  changeFecha_descuento(event) {
    this.props.changeFecha_descuento(event.target.value);
  }
  changeImporte_descuento(event) {
    this.props.changeImporte_descuento(event.target.value);
  }
  changeSaldo(event) {
    this.props.changeSaldo(event.target.value);
  }
  changeFecha_ultimo_pago(event) {
    this.props.changeFecha_ultimo_pago(event.target.value);
  }

  insertar() {
    console.log("Insertando...");
    this.props.create();
  }
  render() {
    return (
      <Modal isOpen={this.props.show}>
        <ModalHeader>
          <div>
            <h3>Insertar datos</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>
            <input className="form-control" readOnly type="text" />
          </FormGroup>

          <FormGroup>
            <label>Manzana:</label>
            <input
              className="form-control"
              name="manzana"
              type="text"
              onChange={this.changeManzana}
            />
          </FormGroup>

          <FormGroup>
            <label>Lote:</label>
            <input
              className="form-control"
              name="lote"
              type="text"
              onChange={this.changeLote}
              
            />
          </FormGroup>

          <FormGroup>
            <label >Usuario:</label>
            <input
              className="form-control"
              name="usuario"
              type="text"
              onChange={this.changeUsuario}
            />
          </FormGroup>

          <FormGroup>
            <label>Nombre:</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              onChange={this.changeNombre}
            />
          </FormGroup>

          <FormGroup>
            <label>Domicilio:</label>
            <input
              className="form-control"
              name="domicilio"
              type="text"
              onChange={this.changeDomicilio}
            />
          </FormGroup>

          <FormGroup>
            <label>Colonia:</label>
            <input
              className="form-control"
              name="colonia"
              type="text"
              onChange={this.changeColonia}
            />
          </FormGroup>

          <FormGroup>
            <label>Tarifa:</label>
            <input
              className="form-control"
              name="tarifa"
              type="text"
              onChange={this.changeTarifa}
            />
          </FormGroup>

          <FormGroup>
            <label>Estado:</label>
            <input
              className="form-control"
              name="estado"
              type="text"
              onChange={this.changeEstado}
            />
          </FormGroup>

          <FormGroup>
            <label>Fecha_descuento:</label>
            <input
              className="form-control"
              name="fecha_descuento"
              type="text"
              onChange={this.changeFecha_descuento}
            />
          </FormGroup>

          <FormGroup>
            <label>importe_descuento:</label>
            <input
              className="form-control"
              name="importe_decuento"
              type="text"
              onChange={this.changeImporte_descuento}
            />
          </FormGroup>

          <FormGroup>
            <label>Saldo:</label>
            <input
              className="form-control"
              name="saldo"
              type="text"
              onChange={this.changeSaldo}
            />
          </FormGroup>

          <FormGroup>
            <label>fecha_ultimo_pago:</label>
            <input
              className="form-control"
              name="fecha_ultimo_pago"
              type="text"
              onChange={this.changeFecha_ultimo_pago}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => this.props.create()}>
            Insertar
          </Button>
          <Button
            className="btn btn-danger"
            onClick={() => this.props.closeModal()}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalInsertar;

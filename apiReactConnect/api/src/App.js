import React, { Component } from "react";
import IndexTable from "./components/IndexTable.js";
import ModalEditar from "./components/modals/ModalEditar.js";
import ModalInsertar from "./components/modals/ModalInsertar.js";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";


const api = axios.create({
  baseURL: "http://localhost:3000",
});

/*const api2 = axios.create({
  baseURL: "http://localhost:3002",
});
const cookies = new Cookies();*/

class App extends Component {
  constructor() {
    super();
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.createLocation = this.createLocation.bind(this);
    this.showInsertModal = this.showInsertModal.bind(this);
    this.cerrarModalInsertar = this.cerrarModalInsertar.bind(this);
    this.showEditarModal = this.showEditarModal.bind(this);
    this.cerrarModalEditar = this.cerrarModalEditar.bind(this);
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
    this.delete = this.delete.bind(this);
    this.updateModificar = this.updateModificar.bind(this);
    /*this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.iniciarSesion = this.iniciarSesion.bind(this);*/
   

    this.state = {
      data: [],
      modalEditar: false,
      modalInsertar: false,
      Lo: false,
      form: {
        id: "1",
        manzana: "",
        lote: "",
        usuario: "",
        nombre: "",
        domicilio: "",
        colonia: "",
        tarifa: "",
        estado: "",
        fecha_descuento: "",
        importe_descuento: "",
        saldo: "",
        fecha_ultimo_pago: "",
      },
    };
    this.getAll(); 
  }

  getAll() {
    api.get("/products").then((res) => {
      const datos = res.data[0];
      this.setState((state) => {
        return { data: datos };
      });
    });
  }

  getById(id) {
    api.get("/products/" + id).then((res) => {
      const datos = [];
      datos.push(res.data);
      this.setState((state) => {
        return { data: datos };
      });
    });
  }

  createLocation() {
    console.log(this.state.form);
    const datos = [];
    var lista = this.state.data;
    lista.push(datos);
    api.post("/products", this.state.form).then((res) => {
      console.log(res);
      this.setState({ modalInsertar: false });
      this.getAll();
    });
  }

  updateModificar(id) {
    api.put("/products/" + id, this.state.form).then((res) => {
      console.log("funciona");
      this.setState({ modalEditar: false });
      this.getAll();
    });
  }

  delete(id) {
    console.log("delete" + id);
    api.delete("/products/" + id).then((res) => {
      this.getAll();
    });
  }

  showInsertModal() {
    this.setState({ ...this.state, modalInsertar: true });
  }

  cerrarModalInsertar() {
    this.setState({ ...this.state, modalInsertar: false });
  }

  showEditarModal(data) {
    this.setState({ ...this.state, modalEditar: true, form: data });
  }

  cerrarModalEditar() {
    this.setState({ ...this.state, modalEditar: false });
  }
  
  changeManzana(value) {
    console.log(value);
    this.setState((prevState) => {
      let form = Object.assign({}, prevState.form);
      form.manzana = value;
      return { form };
    });
  }

  changeLote(value) {
    console.log(value);
    this.setState((prevState) => {
      let form = Object.assign({}, prevState.form);
      form.lote = value;
      return { form };
    });
  }

  changeUsuario(value) {
    console.log(value);
    this.setState((prevState) => {
      let form = Object.assign({}, prevState.form);
      form.usuario = value;
      return { form };
    });
  }

  changeNombre(value) {
    console.log(value);
    this.setState((prevState) => {
      let form = Object.assign({}, prevState.form);
      form.nombre = value;
      return { form };
    });
  }

  changeDomicilio(value) {
    console.log(value);
    this.setState((prevState) => {
      let form = Object.assign({}, prevState.form);
      form.domicilio = value;
      return { form };
    });
  }

  changeColonia(value) {
    console.log(value);
    this.setState((prevState) => {
      let form = Object.assign({}, prevState.form);
      form.colonia = value;
      return { form };
    });
  }

  changeTarifa(value) {
    console.log(value);
    this.setState((prevState) => {
      let form = Object.assign({}, prevState.form);
      form.tarifa = value;
      return { form };
    });
  }

  changeEstado(value) {
    console.log(value);
    this.setState((prevState) => {
      let form = Object.assign({}, prevState.form);
      form.estado = value;
      return { form };
    });
  }

  changeFecha_descuento(value) {
    console.log(value);
    this.setState((prevState) => {
      let form = Object.assign({}, prevState.form);
      form.fecha_descuento = value;
      return { form };
    });
  }

  changeImporte_descuento(value) {
    console.log(value);
    this.setState((prevState) => {
      let form = Object.assign({}, prevState.form);
      form.importe_descuento = value;
      return { form };
    });
  }

  changeSaldo(value) {
    console.log(value);
    this.setState((prevState) => {
      let form = Object.assign({}, prevState.form);
      form.saldo = value;
      return { form };
    });
  }

  changeFecha_ultimo_pago(value) {
    console.log(value);
    this.setState((prevState) => {
      let form = Object.assign({}, prevState.form);
      form.fecha_ultimo_pago = value;
      return { form };
    });
  }
    
  render() {
    return (
      <>
        <IndexTable
          data={this.state.data}
          showModal={this.showInsertModal}
          showM={this.showEditarModal}
          delete={this.delete}
        />
        <ModalEditar
          showEditar={this.state.modalEditar}
          closeModalEditar={this.cerrarModalEditar}
          changeManzana={this.changeManzana}
          changeLote={this.changeLote}
          changeUsuario={this.changeUsuario}
          changeNombre={this.changeNombre}
          changeDomicilio={this.changeDomicilio}
          changeColonia={this.changeColonia}
          changeTarifa={this.changeTarifa}
          changeEstado={this.changeEstado}
          changeFecha_descuento={this.changeFecha_descuento}
          changeImporte_descuento={this.changeImporte_descuento}
          changeSaldo={this.changeSaldo}
          changeFecha_ultimo_pago={this.changeFecha_ultimo_pago}
          update={this.updateModificar}
          editId={this.state.form}
        />
        <ModalInsertar
          show={this.state.modalInsertar}
          closeModal={this.cerrarModalInsertar}
          changeManzana={this.changeManzana}
          changeLote={this.changeLote}
          changeUsuario={this.changeUsuario}
          changeNombre={this.changeNombre}
          changeDomicilio={this.changeDomicilio}
          changeColonia={this.changeColonia}
          changeTarifa={this.changeTarifa}
          changeEstado={this.changeEstado}
          changeFecha_descuento={this.changeFecha_descuento}
          changeImporte_descuento={this.changeImporte_descuento}
          changeSaldo={this.changeSaldo}
          changeFecha_ultimo_pago={this.changeFecha_ultimo_pago}
          create={this.createLocation}
        />
      </>
    );
  }
}
export default App;

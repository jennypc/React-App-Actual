import React, { Component } from "react";
import { Table, Button, Container } from "reactstrap";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const data = [
  {
    id: 1,
    manzana: "1",
    lote: "1",
    usuario: "142913",
    nombre: "VERDUZCO LUGO MARIA GUADALUPE",
    domicilio: "REVOLUCION 1463 NTS",
    colonia: "LAS PALMAS",
    tarifa: "Domestico",
    estado: "Cancelado",
    fecha_descuento: "1900-01-01 00:00:00.000",
    importe_descuento: "0.00",
    saldo: "",
    fecha_ultimo_pago: "1900-01-01 00:00:00.000",
  },
  {
    id: 2,
    manzana: "1",
    lote: "1",
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
  {
    id: 4,
    manzana: "1",
    lote: "1",
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
  {
    id: 5,
    manzana: "1",
    lote: "1",
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
];



class IndexTable extends Component {
  cerrarSesion(){
    cookies.remove('id', {path: "/"});
    cookies.remove('username', {path: "/"});
    window.location.href='./';
  }
  
  componentDidMount() {
    if(!cookies.get('id')){
        window.location.href="./";
    }
  }
  

  render() {
    return (
      <Container >
        <br />
        <Button color="success" onClick={() => this.props.showModal()}>
          Crear
        </Button>
        <br />
        <br />
        <Button color="success" onClick={() => this.cerrarSesion()}>
          Cerrar Sesion 
        </Button>
        <br />
        <br />
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Manzana</th>
              <th>Lote</th>
              <th>Usuario</th>
              <th>Nombre</th>
              <th>Domicilio</th>
              <th>Colonia</th>
              <th>Tarifa</th>
              <th>Estado</th>
              <th>Fecha_descuento</th>
              <th>importe_descuento</th>
              <th>Saldo</th>
              <th>fecha_ultimo_pago</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>
            {this.props.data.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.manzana}</td>
                <td>{dato.lote}</td>
                <td>{dato.usuario}</td>
                <td>{dato.nombre}</td>
                <td>{dato.domicilio}</td>
                <td>{dato.colonia}</td>
                <td>{dato.tarifa}</td>
                <td>{dato.estado}</td>
                <td>{dato.fecha_descuento}</td>
                <td>{dato.importe_descuento}</td>
                <td>{dato.saldo}</td>
                <td>{dato.fecha_ultimo_pago}</td>
                <td>
                  <Button color="primary" onClick={() => this.props.showM(dato)}>
                      Editar
                  </Button>
                  <Button color="danger" onClick={() => this.props.delete(dato.id)}>Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default IndexTable;

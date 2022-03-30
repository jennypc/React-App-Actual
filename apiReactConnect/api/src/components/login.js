import React, { Component } from "react";
import "../css/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";

const api = axios.create({
  baseURL: "https://pametestusers.free.beeceptor.com",
});
const cookies = new Cookies();

class Login extends Component {
  constructor() {
    super();
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.iniciarSesion = this.iniciarSesion.bind(this);

    this.state = {
      data: [],
      form: {
        username: "",
        password: "",
      },
    };
  }

  iniciarSesion() {
    api
      .post("/", {
          username: this.state.form.username,
          password: md5(this.state.form.password),
      })
      .then((res) => {
          console.log(res);
          cookies.set("id", res.data.id);
          cookies.set("username", res.data.username, { path: "/" });
          alert(`Bienvenido ${res.data.username}`);
          window.location.href = "./dashboard";
      })
      .catch((error) => {
        console.log(error);
        alert("El usuario o la contraseña no son correctos");
      });
  }
  componentDidMount() {
    if (cookies.get("id")) {
      window.location.href = "./dashboard";
    }
  }

  changeUsername(event) {
    console.log(event.target.value);
    this.setState((prevState) => {
      let form = Object.assign({}, prevState.form);
      form.username = event.target.value;
      return { form };
    });
  }

  changePassword(event) {
    console.log(event.target.value);
    this.setState((prevState) => {
      let form = Object.assign({}, prevState.form);
      form.password = event.target.value;
      return { form };
    });
  }

  render() {
    return (
      <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.changeUsername}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.changePassword}
            />
            <br />
            <button
              className="btn btn-primary"
              onClick={() => this.iniciarSesion()}
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;

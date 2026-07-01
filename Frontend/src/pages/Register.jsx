import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function cadastrar(e) {
    e.preventDefault();

    try {
      await api.post("/auth/register", {
        name,
        email,
        password,
      });

      alert("Cadastro realizado!");
      navigate("/");
    } catch {
      alert("Erro ao cadastrar");
    }
  }

  return (
    <div className="container">
      <h1>Cadastro</h1>

      <form onSubmit={cadastrar}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>

      <p className="vazio">
        Já tem conta? <Link to="/">Entrar</Link>
      </p>
    </div>
  );
}

export default Register;
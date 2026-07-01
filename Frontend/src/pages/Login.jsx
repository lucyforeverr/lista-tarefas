import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function entrar(e) {
    e.preventDefault();

    try {
      const resposta = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", resposta.data.token);
      navigate("/home");
    } catch {
      alert("Email ou senha inválidos");
    }
  }

  return (
    <div className="container">
      <h1>Login</h1>

      <form onSubmit={entrar}>
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

        <button type="submit">Entrar</button>
      </form>

      <p className="vazio">
        Não tem conta? <Link to="/cadastro">Cadastrar</Link>
      </p>
    </div>
  );
}

export default Login;
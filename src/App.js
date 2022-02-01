import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';

import ValidacoesCadastro from "./components/contexts/ValidacoesCadastro";
import { validarCPF, validarSenha, validarNome } from "./models/cadastro";

import { Container, Typography } from "@material-ui/core"
function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
      <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarNome }} >
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ ValidacoesCadastro.Provider >
    </Container>
  );

}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;

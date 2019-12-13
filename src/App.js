import React from "react";
import { Container } from "react-bootstrap";
import InputForm from "./componets/InputForm";
import { DataProvider } from "./context/WeatherDataContext";
import Main from "./componets/Main";

function App() {
  return (
    <DataProvider>
      <Container className="p-5">
        <InputForm />
        <Main />
      </Container>
    </DataProvider>
  );
}

export default App;

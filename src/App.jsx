import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import "./App.css";

const App = () => {
  const [temperature, setTemperature] = useState("");
  const [unit, setUnit] = useState("Celsius");
  const [convertedTemp, setConvertedTemp] = useState("");

  const handleConversion = (e) => {
    const inputTemp = e.target.value;
    setTemperature(inputTemp);

    if (inputTemp!== "") {
      const result = unit === "Celsius" ? (inputTemp * 9) / 5 + 32 : ((inputTemp - 32) * 5) / 9;
      setConvertedTemp(result);
    } else {
      setConvertedTemp("");
    }
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
    setTemperature("");
    setConvertedTemp("");
  };

  const clearFields = () => {
    setTemperature("");
    setConvertedTemp("");
  };

  return (
    <div className="bg-container">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="glass-card p-4">
          <h2 className="text-center mb-4">Temperature Converter</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Enter Temperature:</Form.Label>
              <Form.Control
                type="text"
                value={temperature}
                onChange={handleConversion}
                placeholder="Enter value"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Unit:</Form.Label><br></br>
              <Form.Check
                type="radio"
                label="Celsius"
                value="Celsius"
                checked={unit === "Celsius"}
                onChange={handleUnitChange}
                inline
              />
              <Form.Check
                type="radio"
                label="Fahrenheit"
                value="Fahrenheit"
                checked={unit === "Fahrenheit"}
                onChange={handleUnitChange}
                inline
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" className="me-2" onClick={clearFields}>
                Clear
              </Button>
            </div>
          </Form>

          {
          convertedTemp ? (
            <div className="mt-4 text-center">
              <h4>Converted temperature is {convertedTemp} {unit === "Celsius" ? "°F" : "°C"}</h4>
            </div>
          ):
          ("")
          }
        </Card>
      </Container>
    </div>
  );
};

export default App;

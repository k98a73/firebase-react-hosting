import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); /* フォームの送信時に、ページのリロードを防ぐ */
    addTodo(value);
  };

  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
    console.log(newTodos);
  };

  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">Todo リスト</h1>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <InputGroupAddon addonType="append">
              <Button type="submit" color="primary">
                追加
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </Container>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Table,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); /* フォームの送信時に、ページのリロードを防ぐ */
    addTodo(value);
    setValue("");
  };

  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
    console.log(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

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
      <Container>
        <Table>
          <tbody>
            {todos &&
              todos.map((todo, index) => (
                <tr key={index}>
                  <th className="text-start">{todo}</th>
                  <td className="text-end">
                    <Button color="danger" onClick={() => removeTodo(index)}>削除</Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;

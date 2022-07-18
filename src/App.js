import './App.css';
import React from 'react';
// Bootstrap for react
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <Container>
        <Row className="align-self-center justify-content-between">
        <Col className="col">
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
              <h5>{todo.text}</h5>
            </span>
          </Col>
          <Col className="col-2">
            <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
            <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      {/*<Form.Label><b>Add Todo</b></Form.Label>*/}
      <Form.Control type="text" className="input mb-2" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    </Form.Group>
      <Col sm={{ span: 10, offset: 5 }}>
        <Button variant="primary mb-3" type="submit">Submit</Button>
      </Col>
  </Form>
  );
}

function App() {

  const [lists, setLists] = React.useState([]);

  const addTodo = text => {
    const newLists = [...lists, { text, isDone: false }];
    setLists(newLists);
  };

  const markTodo = index => {
    const newLists = [...lists];
    newLists[index].isDone = !newLists[index].isDone;
    setLists(newLists);
  };

  const removeTodo = index => {
    const newLists = [...lists];
    newLists.splice(index, 1);
    setLists(newLists);
  };

  return (
    <div className="App">
      <Container>
        <Row style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: '3rem',
                  fontWeight: 'bolder',
                }}>TODO LIST
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <FormTodo addTodo={addTodo} />
          </Col>
        </Row>
        <Row>
          <Col>
                {lists.map((todo, index) => (
                <Card className="bg-white mb-2" border="info" style={{height: "65px"}} key={index}>
                  <Card.Body>
                    <Todo
                      index={index}
                      todo={todo}
                      markTodo={markTodo}
                      removeTodo={removeTodo}
                      />
                  </Card.Body>
                </Card>
                ))}
          </Col>
        </Row>
      </Container>
      <footer className="bg-transparent fixed-bottom">
        <div className="p-4 d-flex justify-content-start text-light">
          © 2022 Created By:<span> </span>
          <a class="text-dark fw-bold" href="https://github.com/FrixellScriptWorks">FrixellScriptWorks</a>
          <span> </span>| Picture By:<span> </span>
          <a class="text-dark fw-bold" href="https://www.pexels.com/id-id/foto/perahu-layar-putih-di-perairan-611328/">Matheus Guimarães</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React from "react";
import Container from "./Container";
import Counter from "./Counter";

class App extends React.Component {
  render() {
    return (
        <>
          <Container title='bellissimo titolo'>
            <Counter />
          </Container>
        </>
    );
  }
}

export default App;


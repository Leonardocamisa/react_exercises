import React from "react";
import Container from "./Container";
import Counter from "./Counter";

class App extends React.Component {
  render() {
    return (
        <>
          <Container>
            <Counter />
          </Container>
        </>
    );
  }
}

export default App;


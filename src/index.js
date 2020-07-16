import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Grommet, Heading, Box, TextInput } from "grommet";

import "./styles.css";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "14px"
    }
  }
};

function App() {
  const [text, setText] = useState("Sample");
  return (
    <Grommet theme={theme}>
      <Box>
        <Heading level={4}>Make it Right</Heading>
        <TextInput
          placeholder="Add text here"
          onChange={() => setText(event.target.value)}
        />
        <p>{text}</p>
      </Box>
    </Grommet>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

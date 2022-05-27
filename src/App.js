import "./App.css";
import CardContainer from "./components/CardContainer";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <CardContainer background="#fff">
        <h1 style={{ fontSize: 18 }}>Reusable inputs Testing series</h1>
        <sub>with custom hook & jest testing library</sub>
      </CardContainer>
      <br />
      <CardContainer background="#fff">
        <Form />
      </CardContainer>
    </div>
  );
}

export default App;

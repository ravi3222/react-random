import AccessingDOM from "./components/AccesingDOM";
import Form from "./components/Form";
import InputFocus from "./components/InputFocus";
import Stopwatch from "./components/StopwatchRefs";
import UseRefs from "./components/UseRefs";
import UsingState from "./components/UsingState";
import "./styles.css";

export default function App() {
  // console.log("I rendered!");

  return (
    <>
      <UseRefs />
      <UsingState />
      <Stopwatch />
      <AccessingDOM />
      <InputFocus />
      <Form />
    </>
  );
}

import { useState } from "react";

export default function UsingState() {
  const [count, setCount] = useState(0);

  const handle = () => {
    setCount((count) => count + 1);

    console.log(`Clicked ${count} times`);
  };
  console.log("I rendered!");

  return <button onClick={handle}>Click me (State)</button>;
}

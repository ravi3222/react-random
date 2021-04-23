import { useRef } from "react";

export default function UseRefs() {
  const countRef = useRef(0);

  const handleChange = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };

  console.log("I rendered!");

  return <button onClick={handleChange}>Click Me (Ref)</button>;
}

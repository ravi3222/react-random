import { useEffect, useRef, useState } from "react";

export default function InputFocus() {
  const [name, setName] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const inputHandler = (e) => {
    setName(e.target.value);
    console.log("name", name);
  };
  return (
    <input
      ref={inputRef}
      onChange={inputHandler}
      type="text"
      placeholder="Enter text"
    />
  );
}

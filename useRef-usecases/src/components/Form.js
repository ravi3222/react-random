import React, { useRef } from "react";

export default function Form() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(name, email, password);
  };

  console.log("I render");
  return (
    <React.Fragment>
      <h1>Form</h1>
      <label>
        Name:
        <input placeholder="name" type="text" ref={nameRef} />
      </label>
      <label>
        Email:
        <input placeholder="email" type="text" ref={emailRef} />
      </label>
      <label>
        Password:
        <input placeholder="password" type="text" ref={passwordRef} />
      </label>

      <hr />

      <button onClick={() => nameRef.current.focus()}>Focus Name Input</button>
      <button onClick={() => emailRef.current.focus()}>
        Focus Email Input
      </button>
      <button onClick={() => passwordRef.current.focus()}>
        Focus Password Input
      </button>

      <hr />

      <button onClick={handleSubmit}>Submit</button>
    </React.Fragment>
  );
}

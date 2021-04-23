import { useRef, useEffect } from "react";

export default function AccessingDOM() {
  const elementRef = useRef();

  useEffect(() => {
    const divElement = elementRef.current;
    // console.log(divElement);
  }, []);

  return (
    <div ref={elementRef}>
      <h1>Accessing Dom</h1>
      <p>I'm an element</p>
    </div>
  );
}

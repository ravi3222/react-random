import { jsx as _jsx } from "myOwnJSX/jsx-runtime";

/** @jsxImportSource myOwnJSX */
let c = 9; // const jsxCallback = (tag, props, children) => {
//   console.log({
//     tag: tag,
//     props: props,
//     children: children,
//   });
// };

const jsxExpression = _jsx("div", {
  className: "test",
  children: _jsx("p", {
    onClick: () => console.log("click"),
    children: c
  })
});
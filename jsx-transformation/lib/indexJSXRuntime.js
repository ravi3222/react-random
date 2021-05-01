import { jsx as _jsx } from "react/jsx-runtime";
// jsx jsxCallback pragma
let c = 9; // const jsxCallback = (tag, props, children) => {
//   console.log({
//     tag: tag,
//     props: props,
//     children: children,
//   });
// };

const jsxExpression = /*#__PURE__*/_jsx("div", {
  className: "test",
  children: /*#__PURE__*/_jsx("p", {
    onClick: () => console.log("click"),
    children: c
  })
});
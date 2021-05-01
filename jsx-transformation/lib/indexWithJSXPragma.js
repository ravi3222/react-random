/** @jsx jsxCallback */
let c = 9;

const jsxCallback = (tag, props, children) => {
  console.log({
    tag: tag,
    props: props,
    children: children,
  });
};

const jsxExpression = jsxCallback(
  "div",
  {
    className: "test",
  },
  jsxCallback(
    "p",
    {
      onClick: () => console.log("click"),
    },
    c
  )
);

// ==================================
// {
//   "tag": "p",
//   "props": {},
//   "children": 9
// }

// {
//   "tag": "div",
//   "props": {
//       "className": "test"
//   }
// }

// ===================================
// {tag: "p", props: {…}, children: 9}
// children: 9
// props:
// onClick: () => console.log("click")
// __proto__: Object
// tag: "p"
// __proto__: Object

// {tag: "div", props: {…}, children: undefined}
// children: undefined
// props: {className: "test"}
// tag: "div"
// __proto__: Object

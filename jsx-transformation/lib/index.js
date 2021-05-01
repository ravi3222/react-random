/** @jsx jsxCallback */
let c = 9;

const jsxCallback = (tag, props, children) => {
  console.log({
    tag: tag,
    props: props,
    children: children
  });
};

const jsxExpression = jsxCallback("div", {
  className: "test"
}, jsxCallback("p", {
  onClick: () => console.log("click")
}, c));
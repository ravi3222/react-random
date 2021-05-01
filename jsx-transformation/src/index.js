/** @jsx jsxCallback */
let c = 9;

const jsxCallback = (tag, props, children) => {
  console.log({
    tag: tag,
    props: props,
    children: children,
  });
};

const jsxExpression = (
  <div className="test">
    <p onClick={() => console.log("click")}>{c}</p>
  </div>
);

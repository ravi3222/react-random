# JSX transformation with babel / Without CRA

<!-- <h3>plugin-transform-react-jsx with classic runtime</h3>

```

let c = 9;
const jsxExpression = /*#__PURE__*/React.createElement("div", {
  className: "test"
}, /*#__PURE__*/React.createElement("p", {
  onClick: () => console.log("click")
}, c));

``` -->

<ul>
<li><h2>plugin-transform-react-jsx with classic runtime</h2></li>

```

let c = 9;
const jsxExpression = /_#**PURE**_/React.createElement("div", {
className: "test"
}, /_#**PURE**_/React.createElement("p", {
onClick: () => console.log("click")
}, c));

```

<!-- <hr/> -->

<li><h2>plugin-transform-react-jsx with jsx pragma</h2></li>

```
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

```

<!-- <hr/> -->

<li><h2>plugin-transform-react-jsx with automatic runtime</h2></li>

```
import { jsx as _jsx } from "react/jsx-runtime";
let c = 9;

const jsxExpression = /*#__PURE__*/_jsx("div", {
  className: "test",
  children: /*#__PURE__*/_jsx("p", {
    onClick: () => console.log("click"),
    children: c
  })
});

```

<li><h2>plugin-transform-react-jsx with automatic runtime - @jsxImportSource pragma</h2></li>

```

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

```

</ul>

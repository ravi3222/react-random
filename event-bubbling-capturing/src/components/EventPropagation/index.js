import React, { useState } from "react";
import "./styles.css";

export default function EventPropagation(props) {
  const [stopPropagationOnChild, setStopPropagationOnChild] = useState(false);
  const [stopPropagationOnParent, setStopPropagationOnParent] = useState(false);
  const [stopPropagationOnGrand, setStopPropagationOnGrand] = useState(false);
  const [logLines, setLogLines] = useState([]);

  const handleClickButton = (e) => {
    renderLogs("Child Clicked");
    stopPropagationOnChild && e.stopPropagation();
  };

  const handleClickParent = (e) => {
    renderLogs("Parent Clicked");
    stopPropagationOnParent && e.stopPropagation();
  };

  const handleClickGrand = (e) => {
    renderLogs("Grand parent Clicked");
    stopPropagationOnGrand && e.stopPropagation();
  };

  const renderLogs = (msg) => {
    setLogLines((log) => log.concat([msg]));
  };
  //   const renderOptions = () => {};

  return (
    <div className="container">
      <div id="grandParent" onClick={handleClickGrand}>
        <div id="parent" onClick={handleClickParent}>
          <div id="child" onClick={handleClickButton}>
            Click Me
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <label>
            <input
              type="checkbox"
              value={stopPropagationOnGrand}
              onChange={(e) => setStopPropagationOnGrand(e.target.value)}
            />
            &nbsp; Stop Propagation on Grand Click (red)
          </label>
          <br />

          <label>
            <input
              type="checkbox"
              value={stopPropagationOnParent}
              onChange={(e) => setStopPropagationOnParent(e.target.value)}
            />
            &nbsp; Stop Propagation on Parent Click (blue)
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value={stopPropagationOnChild}
              onChange={(e) => setStopPropagationOnChild(e.target.value)}
            />
            &nbsp; Stop Propagation on Child click (green)
          </label>
        </div>

        <textarea value={logLines.join("\n")} />
      </div>
    </div>
  );
}

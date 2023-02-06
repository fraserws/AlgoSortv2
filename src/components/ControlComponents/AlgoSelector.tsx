import React from "react";

function AlgoSelector() {
  return (
    <div className="dropdown dropdown-top">
      <label tabIndex={0} className="btn m-1">
        Click
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
  );
}

export default AlgoSelector;

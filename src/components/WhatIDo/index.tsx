import cs from "classnames";
import React from "react";
import classes from "./what-i-do.module.scss";

const WhatIDo = () => {
  return (
    <div
      className={cs(
        "container-default padding-top-48 padding-bottom-48",
        classes.WhatIDo
      )}
    >
      <h1 className="title-block">What I do</h1>
      <div className={classes.content}>
        <div className={classes.cards}>Cards</div>
        <div className={classes.textContent}>Text content</div>
      </div>
    </div>
  );
};

export default WhatIDo;

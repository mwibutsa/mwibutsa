import BackenddIcon from "assets/images/backend-icon.svg";
import FrontendIcon from "assets/images/frontend-icon.svg";
import MobileAppIcon from "assets/images/mobile-app-icon.svg";
import UIUXIcon from "assets/images/ui-ux-icon.svg";
import cs from "classnames";
import React from "react";
import classes from "./what-i-do.module.scss";

const WhatIDo = () => {
  return (
    <div
      className={cs(
        "container-default padding-top-100 padding-bottom-100",
        classes.WhatIDo
      )}
    >
      <h1 className="title-block">What I do</h1>
      <div className={classes.content}>
        <div className={classes.cards}>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={FrontendIcon} alt="" />
            </div>
            <h1 className={classes.cardTitle}>Frontend development</h1>
            <p className={classes.cardDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={BackenddIcon} alt="" />
            </div>
            <h1 className={classes.cardTitle}>Backend development</h1>
            <p className={classes.cardDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={MobileAppIcon} alt="" />
            </div>
            <h1 className={classes.cardTitle}>Mobile application</h1>
            <p className={classes.cardDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={classes.card}>
            <div className={classes.cardImage}>
              <img src={UIUXIcon} alt="" />
            </div>
            <h1 className={classes.cardTitle}>UI/UX Design</h1>
            <p className={classes.cardDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className={classes.textContent}>
          <h1 className="title-block">Why should you hire me?</h1>
          <p>
            I am a full-stack software engineer and a natural team player with
            both remote and onsite experience. I Have experience in building web
            and mobile applications using Python Django, Nodejs, React,
            React-native, and UI/UX design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

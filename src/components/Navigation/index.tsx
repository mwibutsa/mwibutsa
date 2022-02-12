import React, { ReactElement } from "react";
import classes from "./navigation.module.scss";
const Navigation: React.FC = (): ReactElement => {
  return (
    <div className={classes.Navigation}>
      <h1 className={classes.Logo}>Mwibutsa</h1>
      <ul className={classes.NavigationMenu}>
        <li className={classes.MenuItem}>About me</li>
        <li className={classes.MenuItem}>Experience</li>
        <li className={classes.MenuItem}>Project</li>
        <li className={classes.MenuItem}>Education</li>
        <li className={classes.MenuItem}>Let's talk</li>
      </ul>
    </div>
  );
};

export default Navigation;

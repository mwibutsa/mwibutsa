import cs from "classnames";
import React, { ReactElement } from "react";
import classes from "./navigation.module.scss";

const Navigation: React.FC = (): ReactElement => {
  const navRef = React.useRef<HTMLDivElement>(null);

  const handleButtonClick = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const button = e.currentTarget as HTMLDivElement;
      button.classList.toggle(classes.hideMenu);
      if (navRef.current) {
        navRef.current.classList.toggle(classes.showMenu);
      }
      console.log(navRef.current);
    },
    []
  );

  return (
    <div ref={navRef} className={classes.Navigation}>
      <h1 className={classes.logo}>Mwibutsa</h1>
      <ul className={classes.navigationMenu}>
        <li className={classes.menuItem}>About me</li>
        <li className={classes.menuItem}>Experience</li>
        <li className={classes.menuItem}>Project</li>
        <li className={classes.menuItem}>Education</li>
        <li className={classes.menuItem}>Let's talk</li>
      </ul>
      <div
        onClick={handleButtonClick}
        className={cs(classes.navigationButton)}
      ></div>
    </div>
  );
};

export default Navigation;

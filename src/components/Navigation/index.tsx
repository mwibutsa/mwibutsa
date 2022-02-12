import Button from "components/common/Button";
import React, { ReactElement } from "react";
import classNames from "./navigation.module.scss";
const Navigation: React.FC = (): ReactElement => {
  return (
    <div className={classNames.Navigation}>
      <h1 className={classNames.Logo}>Mwibutsa</h1>
      <ul className={classNames.NavigationMenu}>
        <li className={classNames.MenuItem}>About me</li>
        <li className={classNames.MenuItem}>Experience</li>
        <li className={classNames.MenuItem}>Project</li>
        <li className={classNames.MenuItem}>Education</li>
        <li className={classNames.MenuItem}>Let's talk</li>
      </ul>
      <Button className="btn--primary" onClick={() => {}}>
        <a href="mailto:floribert.mwibutsa@gmail.com">Contact</a>
      </Button>
    </div>
  );
};

export default Navigation;

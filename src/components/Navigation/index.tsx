import cs from 'classnames';
import React, { ReactElement, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import classes from './navigation.module.scss';

const MENUS: { [x: string]: string } = {
  about: 'About',
  home: 'About',
  experience: 'Experience',
  projects: 'Projects',
  services: 'Services',
  education: 'Education',
  'contact-me': 'LetsTalk',
};

const Navigation: React.FC = (): ReactElement => {
  const navRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLDivElement>(null);

  const [activeMenu, setActiveMenu] = React.useState<string>('About');

  const location = useLocation();

  useEffect(() => {
    scroller.scrollTo(activeMenu, {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutCubic',
      offset: -60,
    });
    if (navRef.current && buttonRef.current) {
      navRef.current.classList.remove(classes.showMenu);
      buttonRef.current.classList.remove(classes.hideMenu);
    }
  }, [activeMenu]);

  useEffect(() => {
    if (location.pathname) {
      setActiveMenu(MENUS[location.pathname.replace('/', '') || 'about']);
    }
  }, [location.pathname]);

  const handleButtonClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const button = e.currentTarget as HTMLDivElement;
      button.classList.toggle(classes.hideMenu);
      if (navRef.current) {
        navRef.current.classList.toggle(classes.showMenu);
      }
    },
    []
  );

  const isActive = useCallback(
    (path) => {
      return location.pathname === path;
    },
    [location.pathname]
  );

  return (
    <div ref={navRef} className={classes.Navigation}>
      <h1 className={classes.logo}>
        <Link to='/home'>Mwibutsa</Link>
      </h1>
      <ul className={classes.navigationMenu}>
        <li
          className={cs(classes.menuItem, {
            [classes.active__menu]: isActive('/about') || isActive('/home'),
          })}
        >
          <Link to='/about'>About me</Link>
        </li>

        <li
          className={cs(classes.menuItem, {
            [classes.active__menu]: isActive('/services'),
          })}
        >
          <Link to='/services'>Services</Link>
        </li>
        <li
          className={cs(classes.menuItem, {
            [classes.active__menu]: isActive('/experience'),
          })}
        >
          <Link to='/experience'>Experience</Link>
        </li>
        <li
          className={cs(classes.menuItem, {
            [classes.active__menu]: isActive('/projects'),
          })}
        >
          <Link to='/projects'>Projects</Link>
        </li>
        <li
          className={cs(classes.menuItem, {
            [classes.active__menu]: isActive('/education'),
          })}
        >
          <Link to='/education'>Education</Link>
        </li>
        <li
          className={cs(classes.menuItem, {
            [classes.active__menu]: isActive('/contact-me'),
          })}
        >
          <Link to='/contact-me'>Let's talk</Link>
        </li>
      </ul>
      <div
        ref={buttonRef}
        onClick={handleButtonClick}
        className={cs(classes.navigationButton)}
      ></div>
    </div>
  );
};

export default Navigation;

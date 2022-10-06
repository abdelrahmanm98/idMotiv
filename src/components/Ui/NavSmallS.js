import { useContext, useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from '../Dashboard/Dashboard.module.css';

import { ReactComponent as DathBoard } from '../Dashboard/SvgIcon/dashboard-icon.svg';
import { ReactComponent as Cars } from '../Dashboard/SvgIcon/car.svg';
import { ReactComponent as Settings } from '../Dashboard/SvgIcon/settings.svg';
import { ReactComponent as Logout } from '../Dashboard/SvgIcon/logout.svg';
import { ReactComponent as Display } from '../Dashboard/SvgIcon/display.svg';
import { ReactComponent as Logo } from '../Dashboard/SvgIcon/logo-page.svg';
import { ReactComponent as IconClose } from '../Dashboard/SvgIcon/icons8-close.svg';

const NavSmallS = () => {
  const [hide, setHide] = useState(false);

  const history = useHistory(); // Redirecting The User

  const authCtx = useContext(AuthContext);

  const hideNavBar = () => {
    setHide(false);
  };

  const ShowNavBar = () => {
    setHide(true);
  };

  const logoutHandler = () => {
    authCtx.logout();
    history.replace('/');
  };

  return (
    <Fragment>
      <header className='header scroll-header' id='header'>
        <nav className='nav container'>
          <Logo />

          {hide && (
            <div className='nav__menu show-menu' id='nav-menu'>
              <ul className='nav__list grid'>
                <li className='nav__item'>
                  <NavLink
                    to='/dashboard'
                    activeClassName={classes.active}
                    className='nav__link'
                  >
                    <DathBoard />
                    Dashboard
                  </NavLink>
                </li>
                <li className='nav__item'>
                  <NavLink
                    to='/booking'
                    activeClassName={classes.active}
                    className='nav__link'
                  >
                    <Cars />
                    Cars
                  </NavLink>
                </li>

                <li className='nav__item'>
                  <a href='#' className='nav__link'>
                    <Settings />
                    Settings
                  </a>
                </li>
                <li className='nav__item'>
                  <a href='#' className='nav__link' onClick={logoutHandler}>
                    <Logout />
                    Log out
                  </a>
                </li>
              </ul>
              <i className=' nav__close' onClick={hideNavBar} id='nav-close'>
                <IconClose />
              </i>
            </div>
          )}
          <div className='nav__btns'>
            <i className='uil uil-moon change-theme' id='theme-button'></i>
            <div className='nav__toggle' id='nav-toggle' onClick={ShowNavBar}>
              <Display />
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default NavSmallS;

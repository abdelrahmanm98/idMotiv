import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../../store/auth-context';

import classes from '../Dashboard.module.css';
import iconPage from '../SvgIcon/logo-page.svg';
import { ReactComponent as DathBoard } from '../SvgIcon/dashboard-icon.svg';
import { ReactComponent as Cars } from '../SvgIcon/car.svg';
import { ReactComponent as Settings } from '../SvgIcon/settings.svg';
import { ReactComponent as Logout } from '../SvgIcon/logout.svg';

const Asaid = () => {
  const history = useHistory(); // Redirecting The User

  const authCtx = useContext(AuthContext);

  // const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    history.replace('/');
  };

  return (
    <aside className={classes['menu-wrap']}>
      <figure className={classes.user}>
        <img className='w-[7.5rem]' src={iconPage} alt='Motiv' />
      </figure>

      <nav>
        <section className={classes.dicover}>
          <ul>
            <li className='w-[12rem]'>
              <a href='#' className={classes.formatLogo}>
                <DathBoard />
                Dashboard
              </a>
            </li>

            <li className='w-[12rem]'>
              <a href='#' className={classes.formatLogo}>
                <Cars />
                Cars
              </a>
            </li>
          </ul>
        </section>

        <section className={classes.dicover}>
          <ul className='bottom-[3rem] absolute w-1/6'>
            <li className='w-[12rem]'>
              <a href='#' className={classes.formatLogo}>
                <Settings />
                Settings
              </a>
            </li>

            <li className='w-[12rem]'>
              <a
                href='#'
                className={classes.formatLogo}
                onClick={logoutHandler}
              >
                <Logout />
                Log out
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </aside>
  );
};

export default Asaid;

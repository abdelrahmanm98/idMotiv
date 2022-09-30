import { Fragment } from 'react';
import classes from '../Dashboard/Dashboard.module.css';
const DashLayout = (props) => {
  return (
    <Fragment>
      <div className={classes.dashboard}>{props.children}</div>
    </Fragment>
  );
};

export default DashLayout;

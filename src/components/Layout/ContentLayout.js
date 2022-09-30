import { Fragment } from 'react';
import classes from '../Dashboard/Dashboard.module.css';
const ContentLayout = (props) => {
  return (
    <Fragment>
      <main className={classes['content-wrap']}>
        <div className={classes.content}>{props.children}</div>
      </main>
    </Fragment>
  );
};

export default ContentLayout;

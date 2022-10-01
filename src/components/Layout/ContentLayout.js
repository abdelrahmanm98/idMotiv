import { Fragment } from 'react';
import classes from '../Dashboard/Dashboard.module.css';
import DashContent from '../Dashboard/sectionComponent/DashContent';
const ContentLayout = (props) => {
  return (
    <Fragment>
      <main className={classes['content-wrap']}>
        <div className='flex justify-center ml-[0.55rem] mt-[1rem]'>
          {props.children}
        </div>
        <DashContent>{props.children}</DashContent>
      </main>
    </Fragment>
  );
};

export default ContentLayout;

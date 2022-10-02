import { Fragment } from 'react';
import classes from '../Dashboard/Dashboard.module.css';
import DashContent from '../Dashboard/sectionComponent/DashContent';
import Advertisement from '../Dashboard/sectionComponent/Advertisement';
const ContentLayout = (props) => {
  return (
    <Fragment>
      <main className={classes['content-wrap']}>
        <div className='grid gap-4 grid-cols-4 ml-[3px] sm:grid-cols-1  lg:grid-cols-2 xll:grid-cols-4 '>
          {props.children}
        </div>
        <div>
          <Advertisement />
        </div>
        <main className='grid 2-1xl:mr-[4.5rem] 2md:mr-[1rem] ml-[14px] grid-cols-3 xl:grid-cols-2 1xl:grid-cols-3  sm:grid-cols-1 sm:w-[22rem] lg:w-[auto] '>
          {props.passDataCars.map((data) => (
            <DashContent
              key={data.id}
              title={data.title}
              photo={data.photo}
              price={data.price}
              recommend={data.recommend}
              color={data.color}
            >
              {props.children}
            </DashContent>
          ))}
        </main>
      </main>
    </Fragment>
  );
};

export default ContentLayout;

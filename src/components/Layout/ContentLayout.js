import { Fragment } from 'react';
import classes from '../Dashboard/Dashboard.module.css';
import DashContent from '../Dashboard/sectionComponent/DashContent';
import Advertisement from '../Dashboard/sectionComponent/Advertisement';
const ContentLayout = (props) => {
  return (
    <Fragment>
      <main className={classes['content-wrap']}>
        <div className='flex justify-center ml-[0.55rem] mt-[1rem] mr-[2rem]'>
          {props.children}
        </div>
        <div>
          <Advertisement />
        </div>
        <main className='flex flex-row h-[15.5rem] scale-105 w-[89rem] ml-[3.2em] mb-[1rem]'>
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

import { Fragment } from 'react';
import classes from '../Dashboard/Dashboard.module.css';
import DashContent from '../Dashboard/sectionComponent/DashContent';
import Advertisement from '../Dashboard/sectionComponent/Advertisement';
import NavSmallS from '../Ui/NavSmallS';

const ContentLayout = (props) => {
  return (
    <Fragment>
      <main className={classes['content-wrap']}>
        <div className='grid gap-[2%] px-[3%] pt-[2rem] pb-[3rem] grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
          {props.children}
        </div>
        <div>
          <Advertisement />
        </div>
        <main className='grid mx-[3%] mb-[2rem] sm:mb-[4rem] mq:mb-[2rem] grid-cols-3 xl:grid-cols-3 gap-8 mdl:grid-cols-2  sm:grid-cols-1 '>
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
        <NavSmallS />
      </main>
    </Fragment>
  );
};

export default ContentLayout;

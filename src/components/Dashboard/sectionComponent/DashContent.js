import { Fragment } from 'react';

const DashContent = (props) => {
  return (
    <Fragment>
      <div className=' mr-[1.5rem] sm:mb-[1rem] basis-1/3 rounded'>
        <div className={props.color}>
          <div className='my-4 '>
            <img
              className='inline-block ml-[1.5rem]'
              src={require('../SvgIcon/icon-Recommend.svg').default}
            />
            <span className='text-base ml-[0.7rem] font-bold text-[#242731]'>
              {props.recommend}% Recommend
            </span>
          </div>
          <div>
            <img
              className='ml-[1.2rem]'
              src={require(`../../PhotoCars/${props.photo}`)}
              alt='car'
            />
          </div>
          <h3 className='ml-[1.5rem] my-4 Recommend text-[#1F2128] font-bold'>
            {props.title}
          </h3>
          <div>
            <span className='mr-[1.2rem]'>
              <img
                className='inline-block ml-[1.5rem]'
                src={require('../SvgIcon/reload.svg').default}
              />
            </span>
            <span className='mr-[1.2rem] text-sm text-[#72767C]'>
              {props.price}K
            </span>
            <span className='mr-[1.2rem] '>
              <img
                className='inline-block'
                src={require('../SvgIcon/gear.svg').default}
              />
            </span>
            <span className='mr-[1.2rem]'>
              <img
                className='inline-block'
                src={require('../SvgIcon/thunder.svg').default}
              />
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DashContent;

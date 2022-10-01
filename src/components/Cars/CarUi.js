import { Fragment, useState } from 'react';

const CarUi = (props) => {
  const [redHeart, setredHeart] = useState(false);
  const [emptyHeart, setemptyHeart] = useState(true);

  const RedHeart = () => {
    setredHeart((hover) => !hover);
    setemptyHeart((hover) => !hover);
  };
  const EmptyHeart = () => {
    setemptyHeart((hover) => !hover);
    setredHeart((hover) => !hover);
  };

  return (
    <Fragment>
      <div
        key={props.id}
        className='bg-white rounded-2xl basis-[30.9%] hover:bg-[#ebebeb]'
      >
        <div className='mt-[1.2rem] relative'>
          {redHeart && (
            <img
              onClick={EmptyHeart}
              className='inline-block ml-[1.5rem] absolute right-[1.5rem]'
              src={require('../Dashboard/SvgIcon/redheart.svg').default}
            />
          )}
          {emptyHeart && (
            <img
              onClick={RedHeart}
              className='inline-block ml-[1.5rem] absolute right-[1.5rem]'
              src={require('../Dashboard/SvgIcon/heart.svg').default}
            />
          )}
          <span className='text-lg ml-[2rem] font-bold text-[#242731]'>
            {props.title}
          </span>
        </div>
        <h3 className='ml-[2rem] text-base mb-4 Recommend text-[#72767C] font-normal'>
          {props.type}
        </h3>
        <div className='mb-[2rem] relative'>
          <img
            className='m-auto h-[7rem]'
            src={require(`../PhotoCars/${props.photo}`)}
            alt='car'
          />
          <span className='absolute top-[50%] font-medium text-[#5F6165] text-sm right-[7%]'>
            {props.booking}
          </span>
        </div>

        <div className='relative mb-4'>
          <span className='mr-[1.2rem]'>
            <img
              className='inline-block ml-[2rem] mt-[-3px]'
              src={require('../Dashboard/SvgIcon/person.svg').default}
            />
            <span className='mr-[0.8rem] ml-[3px] font-normal text-base text-[#72767C]'>
              {props.Seating}
            </span>
          </span>

          <span className='mr-[1.2rem]'>
            <img
              className='inline-block'
              src={require('../Dashboard/SvgIcon/replay-prp.svg').default}
            />
            <span className='mr-[0.8rem] ml-[5px] font-normal text-base text-[#72767C]'>
              {props.gearStick}
            </span>
          </span>

          <span className='mr-[1.2rem] text-lg font-bold text-black absolute right-3.5'>
            ${props.price}
            <span className='font-normal text-[#72767C]'>/d</span>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default CarUi;

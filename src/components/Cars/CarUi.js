import { Fragment } from 'react';
import carOne from '../PhotoCars/audiblack.png';
const CarUi = () => {
  return (
    <Fragment>
      <main className='flex flex-row h-[18rem] scale-105 w-[76rem] ml-[3.2em] mb-[6rem]'>
        <div className='bg-white basis-1/3 rounded hover:border-[#a162f7]  hover:border hover:border-solid'>
          <div className='my-4 relative'>
            <img
              className='inline-block ml-[1.5rem] absolute right-[1.5rem]'
              src={require('../Dashboard/SvgIcon/heart.svg').default}
            />
            <span className='text-lg ml-[2rem] font-bold text-[#242731]'>
              Porshe 718 Cayman S
            </span>
          </div>
          <h3 className='ml-[2rem] text-base my-4 Recommend text-[#72767C] font-normal'>
            Coupe
          </h3>
          <div className='mb-[1rem]'>
            <img className='ml-[1.2rem] h-32' src={carOne} alt='car' />
          </div>

          <div className='relative'>
            <span className='mr-[1.2rem]'>
              <img
                className='inline-block ml-[2rem] mt-[-3px]'
                src={require('../Dashboard/SvgIcon/person.svg').default}
              />
              <span className='mr-[0.8rem] ml-[3px] font-normal text-base text-[#72767C]'>
                4
              </span>
            </span>

            <span className='mr-[1.2rem]'>
              <img
                className='inline-block'
                src={require('../Dashboard/SvgIcon/replay-prp.svg').default}
              />
              <span className='mr-[0.8rem] ml-[5px] font-normal text-base text-[#72767C]'>
                Manual
              </span>
            </span>

            <span className='mr-[1.2rem] text-lg font-bold text-black absolute right-3.5'>
              $400<span className='font-normal text-[#72767C]'>/d</span>
            </span>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default CarUi;

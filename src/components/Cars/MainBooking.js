import { Fragment } from 'react';
import CarUi from './CarUi';
const MainBooking = () => {
  return (
    <Fragment>
      <main>
        <div className='py-8 px-10'>
          <h3 className='font-bold text-3xl mb-[2rem] text-black'>Booking</h3>
          <div className='flex flex-row relative'>
            <div className='basis-1/2'>
              <span>
                <select className='text-[#5F6165]  mr-[1.3rem] rounded-[22.5px] pr-8 pl-4 py-2 bg-white text-base font-medium'>
                  <option value='New'>New</option>
                  <option value='Used'>Used</option>
                </select>
              </span>
              <span>
                <select className='text-[#5F6165] rounded-[22.5px] pr-8 pl-4 py-2 bg-white text-base font-medium'>
                  <option value='mercedes'>Mercedes</option>
                  <option value='audi'>Audi</option>
                  <option value='opel'>Opel</option>
                  <option value='toyota'>Toyota</option>
                </select>
              </span>
            </div>
            <div className='basis-1/2 absolute right-8'>
              <span className='p-[0.7rem] shadow-[0px_4px_8px_rgba(53,53,53,0.1)]  hover:bg-[#A162F7] mr-[1rem] bg-white rounded-[30px]'>
                <img
                  className='inline-block'
                  src={require('../Dashboard/SvgIcon/display.svg').default}
                />
              </span>
              <span className='p-[0.7rem]  shadow-[0px_4px_8px_rgba(53,53,53,0.1)] hover:bg-[#A162F7] bg-white rounded-[30px]'>
                <img
                  className='inline-block'
                  src={require('../Dashboard/SvgIcon/fillter.svg').default}
                />
              </span>
            </div>
          </div>
        </div>
        <CarUi />
      </main>
    </Fragment>
  );
};

export default MainBooking;

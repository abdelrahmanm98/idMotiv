import { Fragment } from 'react';
import Advertisement from './Advertisement';
import carOne from '../../PhotoCars/car.png';
import carTwo from '../../PhotoCars/mini-country.png';
import carThree from '../../PhotoCars/suzuki-suzuk.png';

const DashContent = (props) => {
  return (
    <Fragment>
      <div>
        <Advertisement />
      </div>
      <main className='flex flex-row h-[15.5rem] scale-105 w-[89rem] ml-[3.2em] mb-[1rem]'>
        <div className='bg-[#E1DFA4] basis-1/3 rounded  hover:bg-[#F2EF9A]'>
          <div className='my-4'>
            <img
              className='inline-block ml-[1.5rem]'
              src={require('../SvgIcon/icon-Recommend.svg').default}
            />
            <span className='text-base ml-[0.7rem] font-bold text-[#242731]'>
              64% Recommend
            </span>
          </div>
          <div>
            <img className='ml-[1.2rem]' src={carOne} alt='car' />
          </div>
          <h3 className='ml-[1.5rem] my-4 Recommend text-[#1F2128] font-bold'>
            Chevrolet Optra
          </h3>
          <div>
            <span className='mr-[1.2rem]'>
              <img
                className='inline-block ml-[1.5rem]'
                src={require('../SvgIcon/reload.svg').default}
              />
            </span>
            <span className='mr-[1.2rem] text-sm text-[#72767C]'>332K</span>
            <span className='mr-[1.2rem]'>
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
        <div className='bg-[#C4DFED] hover:bg-[#DFEEF6] basis-1/3 rounded mx-8'>
          <div className='my-4'>
            <img
              className='inline-block ml-[1.5rem]'
              src={require('../SvgIcon/icon-Recommend.svg').default}
            />
            <span className='text-base ml-[0.7rem] font-bold text-[#242731]'>
              72% Recommend
            </span>
          </div>
          <div>
            <img className='ml-[1.2rem]' src={carTwo} alt='car' />
          </div>
          <h3 className='ml-[1.5rem] my-4  Recommend text-[#1F2128] font-bold'>
            Mini Cooper
          </h3>

          <div>
            <span className='mr-[1.2rem]'>
              <img
                className='inline-block ml-[1.5rem]'
                src={require('../SvgIcon/reload.svg').default}
              />
            </span>
            <span className='mr-[1.2rem] text-sm text-[#72767C]'>200K</span>
            <span className='mr-[1.2rem]'>
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
        <div className='bg-[#F4E3E5] hover:bg-[#FAD4D9] basis-1/3 rounded '>
          <div className='my-4'>
            <img
              className='inline-block ml-[1.5rem]'
              src={require('../SvgIcon/icon-Recommend.svg').default}
            />
            <span className='text-base ml-[0.7rem] font-bold text-[#242731]'>
              90% Recommend
            </span>
          </div>
          <div>
            <img className='ml-[1.2rem]' src={carThree} alt='car' />
          </div>
          <h3 className='ml-[1.5rem] my-4  Recommend text-[#1F2128] font-bold'>
            Suzuki Baleno
          </h3>

          <div>
            <span className='mr-[1.2rem]'>
              <img
                className='inline-block ml-[1.5rem]'
                src={require('../SvgIcon/reload.svg').default}
              />
            </span>
            <span className='mr-[1.2rem] text-sm text-[#72767C]'>135K</span>
            <span className='mr-[1.2rem]'>
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
      </main>
    </Fragment>
  );
};

export default DashContent;

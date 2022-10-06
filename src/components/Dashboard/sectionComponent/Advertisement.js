import { ReactComponent as ManOne } from '../SvgIcon/manone.svg';
import { ReactComponent as LoanPhoto } from '../SvgIcon/photo-loan.svg';
import { ReactComponent as BoyRun } from '../SvgIcon/people-rushing-3.svg';

const Advertisement = () => {
  return (
    <section>
      <main className='grid grid-cols-4 sm:mt-[3rem] md:mt-0 pb-[2rem] gap-8 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-2 md:grid-rows-3 mdl:grid-cols-2 mdl:grid-rows-3 lg:grid-cols-4  lg:grid-rows-1 w-[100%] px-[3%] '>
        <div className=' col-span-2  rounded-[4px] bg-[#FFE0BA] text-black relative h-[16rem]'>
          <h2 className='text-2xl text-[#0F2837] font-bold absolute top-[3.5rem] left-[2rem]'>
            Apply for a car loan !
          </h2>

          <span className='absolute  sm:hidden md:inline lg:hidden xl:inline-block sm:top-[1.5rem] sm:right-[1.5rem]  top-6 right-[.5rem] xl:right-[0rem] '>
            <LoanPhoto />
          </span>
          <span className='text-base  text-[#0F2837] font-normal absolute top-[6rem] left-[2rem] '>
            This is a sample of a generated text
          </span>
          <div className='rounded-[4px] bg-[#0F2837] text-white font-bold absolute bottom-[3rem] left-[2rem]'>
            <button className='text-xs rounded-[4px] py-[1rem] px-[2rem] hover:bg-[#a162f7]'>
              Discover More
            </button>
          </div>
        </div>
        {/* ***************************************** */}

        <div className='relative rounded-[4px] sm:col-span-2 lg:col-span-1  justify-items-center bg-[#0F2837]'>
          <h2 className='absolute sm:text-[20px] font-bold left-[2rem] sm:top-[3.3rem] lg:top-8 xll:top-[2rem] sm:w-[35%] xll:sm:w-[40%] leading-8 w-[30%] text-white'>
            You have earned{' '}
            <span className='text-[#FF9619] sm:text-[29px] font-bold xll:text-[35px]'>
              20
            </span>{' '}
            Badges!
          </h2>
          <div className='absolute  sm:top-[1.5rem] sm:right-[1.5rem] sm:hidden md:inline lg:hidden xl:inline-block  1-2xl:inline xll:right-[-50px] 3xl:right-0  xl:right-[-3.5rem] top-3 '>
            <ManOne />
          </div>
          <span className='text-[#FF9619] left-[34px]  lg:bottom-[2rem]  sm:bottom-[4rem] xll:bottom-[2rem] text-xs absolute bottom-[2rem]'>
            Hooray! Way to go Mohammed!
          </span>
        </div>
        {/* ***************************************** */}

        <div className='relative rounded-[4px] sm:col-span-2 lg:col-span-1 justify-items-center bg-[#6E1946]'>
          <h2 className='absolute sm:text-[20px]  lg:top-8 font-bold left-[2rem] sm:w-[35%] xll:top-[2rem] xll:sm:w-[40%] sm:top-[3rem] leading-8 w-[30%]  text-white'>
            You have earned{' '}
            <span className='text-[#FAC39B] font-bold text-[35px]'>1500</span>{' '}
            Points!
          </h2>

          <div className='absolute  sm:top-[1.5rem] sm:right-[5.5rem]  sm:hidden md:inline lg:hidden xl:inline-block   1-2xl:inline   xl:right-[0.8rem] top-3'>
            <img
              src={require('../SvgIcon/people-rushing-3.svg').default}
              alt='mySvgImage'
            />
          </div>
          <span className='text-[#FAC39B] left-[35px] lg:bottom-[2rem] sm:bottom-[4rem] xll:bottom-[2rem] text-xs absolute bottom-[2rem]'>
            Redeem and claim your rewards!
          </span>
        </div>
      </main>
    </section>
  );
};

export default Advertisement;

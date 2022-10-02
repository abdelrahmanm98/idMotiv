import { ReactComponent as ManOne } from '../SvgIcon/manone.svg';
import { ReactComponent as LoanPhoto } from '../SvgIcon/photo-loan.svg';
import { ReactComponent as BoyRun } from '../SvgIcon/people-rushing-3.svg';

const Advertisement = () => {
  return (
    <section className='mt-0 ml-[1rem]'>
      <main className='grid  grid-cols-[2fr_1fr_1fr] sm:grid-cols-1 sm:grid-rows-3  xll:grid-cols-[2fr_1fr_1fr] xll:grid-rows-1  sm:w-[22rem] lg:w-[auto]'>
        <div className='pt-[2rem] sm:w-[auto] sm:mb-[2rem] xl:mb-[3rem]  rounded-[4px] mr-[3.4rem] 1-2xl:w-[auto] xll:mr-[3.4] 3xl:mr[7rem]   bg-[#FFE0BA] text-black relative h-[16rem]'>
          <h2 className='text-2xl text-[#0F2837] font-bold absolute top-[3.5rem] left-[2rem]'>
            Apply for a car loan !
          </h2>

          <span className='absolute  xll:hidden 1-2xl:inline right-[1.6rem] xll:right-[2.4rem]   sm:hidden  lx2:inline'>
            <LoanPhoto />
          </span>
          <span className='text-base text-[#0F2837] font-normal absolute top-[6rem] left-[2rem] '>
            This is a sample of a generated text
          </span>
          <div className='rounded-[4px] bg-[#0F2837] text-white font-bold absolute bottom-[3rem] left-[2rem]'>
            <button className='text-xs rounded-[4px] py-[1rem] px-[2rem] hover:bg-[#a162f7]'>
              Discover More
            </button>
          </div>
        </div>
        {/* ***************************************** */}
        <div className='pt-[1.5rem] sm:mr-[3.4rem] sm:h-[16rem]  sm:mb-[4.5rem] pb-[3rem] pl-[2rem] xll:w-[auto] 1xll:w-[17rem]  1-2xl:w-[auto] relative rounded-[4px]  pr-12 mr-[4rem] justify-items-center bg-[#0F2837]'>
          <h2 className='absolute sm:text-[20px] font-bold left-[2rem] sm:top-[4rem] xll:top-[2rem] sm:w-[70%] xll:sm:w-[40%] w-[30%] xll:text-2xl text-white'>
            You have earned{' '}
            <span className='text-[#FF9619] sm:text-[29px] font-bold xll:text-[40px]'>20</span>{' '}
            Badges!
          </h2>
          <div className='absolute xll:hidden 1-2xl:inline xll:right-[-50px] 3xl:right-0  right-[-1.6rem]  sm:hidden  lx2:inline'>
            <ManOne />
          </div>
          <span className='text-[#FF9619] xxl:right-[40px]  sm:bottom-[5rem] xll:bottom-[2rem] text-xs absolute bottom-[2rem]'>
            Hooray! Way to go Mohammed!
          </span>
        </div>
        {/* ***************************************** */}
        <div className='pt-[1.5rem] sm:mr-[3.4rem] sm:h-[16rem]  pb-[3rem] pl-[2rem] xll:w-[auto] 1xll:w-[20rem]  1-2xl:w-[auto] relative rounded-[4px]   pr-12 mr-[4rem] justify-items-center bg-[#6E1946]'>
          <h2 className='absolute font-bold left-[2rem] sm:w-[100%] xll:top-[2rem] xll:sm:w-[40%] sm:top-[4rem] w-[30%] text-2xl text-white'>
            You have earned{' '}
            <span className='text-[#FAC39B] font-bold text-[40px]'>1500</span>{' '}
            Points!
          </h2>

          <div className='absolute xll:hidden 1-2xl:inline xxl:right-[6px] 3xl:right-0  right-[1rem]  sm:hidden  lx2:inline'>
            <img
              src={require('../SvgIcon/people-rushing-3.svg').default}
              alt='mySvgImage'
            />
          </div>
          <span className='text-[#FAC39B] sm:bottom-[5rem] xll:bottom-[2rem] text-xs absolute bottom-[2rem]'>
            Redeem and claim your rewards!
          </span>
        </div>
      </main>
    </section>
  );
};

export default Advertisement;

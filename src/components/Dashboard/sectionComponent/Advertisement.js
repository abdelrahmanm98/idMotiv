import { ReactComponent as ManOne } from '../SvgIcon/manone.svg';
import { ReactComponent as LoanPhoto } from '../SvgIcon/photo-loan.svg';
import { ReactComponent as BoyRun } from '../SvgIcon/people-rushing-3.svg';

const Advertisement = () => {
  return (
    <section className='mt-0 mr-[80px] mb-8 ml-[2.2rem]'>
      <main className='flex'>
        <div className='pt-[2rem] mr-[7.4rem] rounded-[4px] scale-105  w-[42.4rem]  bg-[#FFE0BA] text-black relative h-[16rem]'>
          <h2 className='text-2xl text-[#0F2837] font-bold absolute top-[3.5rem] left-[2rem]'>
            Apply for a car loan !
          </h2>

          <span className='absolute right-[2rem]'>
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
        <div className='pt-[1.5rem] pb-[3rem] pl-[2rem] w-[19rem] relative rounded-[4px] scale-105 pr-12 mr-[4rem] justify-items-center bg-[#0F2837]'>
          <h2 className='absolute font-bold left-[2rem] w-[30%] text-2xl text-white'>
            You have earned{' '}
            <span className='text-[#FF9619] font-bold text-[40px]'>20</span>{' '}
            Badges!
          </h2>
          <div className='absolute right-[0]'>
            <ManOne />
          </div>
          <span className='text-[#FF9619]  text-xs absolute bottom-[2rem]'>
            Hooray! Way to go Mohammed!
          </span>
        </div>
        {/* ***************************************** */}
        <div className='pt-[1.5rem] pb-[3rem] pl-[2rem] w-[19rem] relative rounded-[4px] scale-105  pr-12 mr-[4rem] justify-items-center bg-[#6E1946]'>
          <h2 className='absolute font-bold left-[2rem] w-[30%] text-2xl text-white'>
            You have earned{' '}
            <span className='text-[#FAC39B] font-bold text-[40px]'>1500</span>{' '}
            Points!
          </h2>

          <div className='absolute right-[2rem]'>
            <img
              src={require('../SvgIcon/people-rushing-3.svg').default}
              alt='mySvgImage'
            />
          </div>
          <span className='text-[#FAC39B] text-xs absolute bottom-[2rem]'>
            Redeem and claim your rewards!
          </span>
        </div>
      </main>
    </section>
  );
};

export default Advertisement;

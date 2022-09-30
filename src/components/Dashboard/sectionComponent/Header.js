import classes from '../Dashboard.module.css';
import { ReactComponent as Notifications } from '../SvgIcon/notification.svg';
import porfilePage from '../Mask-group.png';
const Header = () => {
  return (
    <header className={classes['search-wrap']}>
      <div className={classes.search}>
        <label className='svg-icon-pass svg-icon-search svg-icon-search'>
          <input
            type='search'
            id='gsearch'
            name='gsearch'
            className='rounded-[10px] bg-[#F5F5F5] pl-[2.8rem] pr-16'
            placeholder='Search or type'
          />
        </label>
      </div>

      <div className={classes['user-actions']}>
        <button>
          <Notifications />
        </button>
        <button className='absolute top-[1px]'>
          <img className='scale-125' src={porfilePage} width='48px' />
        </button>
      </div>
    </header>
  );
};

export default Header;

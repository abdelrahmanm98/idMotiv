import classes from '../Dashboard.module.css';

const Infobox = (props) => {
  return (
    <section className={classes['info-boxes']}>
      <div className={classes['info-box']}>
        <div className={classes['box-icon']}>
          <div className={classes['content-logo']}>{props.svgtop}</div>
        </div>
        <div className='mt-16'>
          <h2 className='pt-4 pb-8 text-[23px] font-medium text-black text-center'>
            {props.title}
          </h2>
          <h2 className='pt-4 pb-8 text-[23px] font-bold text-black text-center'>
            {props.svgbottom}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Infobox;

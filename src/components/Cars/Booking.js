import { Fragment } from 'react';
import Aside from '../Ui/Asaid';
import Header from '../Ui/Header';
import DashLayout from '../Layout/DashLayout';
import MainBooking from './MainBooking';
import LoadingSpinner from '../Ui/LoadingSpinner';
import NavSmallS from '../Ui/NavSmallS';
const Booking = (props) => {
  return (
    <Fragment>
      <DashLayout>
        <Aside />
        <Header />
        {!props.loading && (
          <MainBooking dataCars={props.dataCars} load={props.loading} />
        )}
        {props.loading && <LoadingSpinner />}
        <NavSmallS />
      </DashLayout>
    </Fragment>
  );
};

export default Booking;

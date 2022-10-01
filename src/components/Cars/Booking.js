import { Fragment } from 'react';
import Aside from '../Ui/Asaid';
import Header from '../Ui/Header';
import DashLayout from '../Layout/DashLayout';
import MainBooking from './MainBooking';

const Booking = (props) => {
  return (
    <Fragment>
      <DashLayout>
        <Aside />
        <Header />
        <MainBooking dataCars={props.dataCars} />
      </DashLayout>
    </Fragment>
  );
};

export default Booking;

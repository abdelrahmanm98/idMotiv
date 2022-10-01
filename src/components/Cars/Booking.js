import { Fragment } from 'react';
import Aside from '../Ui/Asaid';
import Header from '../Ui/Header';
import DashLayout from '../Layout/DashLayout';
import MainBooking from './MainBooking';
import CarUi from './CarUi';
const Booking = () => {
  return (
    <Fragment>
      <DashLayout>
        <Aside />
        <Header />
        <MainBooking />
      </DashLayout>
    </Fragment>
  );
};

export default Booking;

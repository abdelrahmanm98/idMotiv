import { Fragment } from 'react';
import Aside from '../Ui/Asaid';
import Header from '../Ui/Header';
import DashLayout from '../Layout/DashLayout';
const Booking = () => {
  return (
    <Fragment>
      <DashLayout>
        <Aside />
        <Header />
      </DashLayout>
    </Fragment>
  );
};

export default Booking;

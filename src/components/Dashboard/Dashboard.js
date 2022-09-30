import { Fragment } from 'react';

import Infobox from './sectionComponent/Infobox';
import Advertisement from './sectionComponent/Advertisement';
import Header from './sectionComponent/Header';
import Asaid from './sectionComponent/Asaid';

import ContentLayout from '../Layout/ContentLayout';
import DashLayout from '../Layout/DashLayout';

const Dashboard = () => {
  return (
    <Fragment>
      {/* (Start) LayOut DashBoard Content */}
      <DashLayout>
        {/* Header Compoenet */}
        <Header />

        {/* Asaid Compoenet*/}
        <Asaid />

        {/* (Start) Layout Content  */}
        <ContentLayout>
          {/* Vehicle characteristics */}
          <Infobox />

          {/* Loans and Badges */}
          <Advertisement />

          {/* (End) Layout Content  */}
        </ContentLayout>
        {/* (End) LayOut DashBoard Content */}
      </DashLayout>
    </Fragment>
  );
};

export default Dashboard;

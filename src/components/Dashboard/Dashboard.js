import { Fragment } from 'react';

import Infobox from './sectionComponent/Infobox';

import Header from '../Ui/Header';
import Asaid from '../Ui/Asaid';

import ContentLayout from '../Layout/ContentLayout';
import DashLayout from '../Layout/DashLayout';

const Dashboard = (props) => {
  return (
    <Fragment>
      {/* (Start) LayOut DashBoard Content */}
      <DashLayout>
        {/* Header Compoenet */}
        <Header />

        {/* Asaid Compoenet*/}
        <Asaid />

        {/* (Start) Layout Content  */}
        <ContentLayout passDataCars={props.dashCars}>
          {/* Vehicle characteristics */}

          {props.dataInfo.map((data) => (
            <Infobox
              key={data.id}
              title={data.title}
              svgtop={data.svgCodeTop}
              svgbottom={data.svgCodeBottom}
            />
          ))}
          {/* (End) Layout Content  */}
        </ContentLayout>

        {/* (End) LayOut DashBoard Content */}
      </DashLayout>
    </Fragment>
  );
};

export default Dashboard;

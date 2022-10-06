import { Fragment } from 'react';

import Infobox from './sectionComponent/Infobox';

import Header from '../Ui/Header';
import Asaid from '../Ui/Asaid';
import ContentLayout from '../Layout/ContentLayout';
import DashLayout from '../Layout/DashLayout';
import LoadingSpinner from '../Ui/LoadingSpinner'
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
        
         {!props.loading && 
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
}

{props.loading && <LoadingSpinner />}



        {/* (End) LayOut DashBoard Content */}
      </DashLayout>
    </Fragment>
  );
};

export default Dashboard;

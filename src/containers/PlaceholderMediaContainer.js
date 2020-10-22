import React, {useEffect, useState} from 'react';

import Button from '@material-ui/core/Button';
import {Card, CardBody, CardImg, CardSubtitle, CardText} from 'reactstrap';

import './plyr.css';

let MenuItemss = <div></div>;
const PlaceholderMediaContainer = (props) => {



  return (

    <div style={{    paddingRight: "1em",
    paddingLeft: "1em"}}>
        <Card className="shadow border-0">
        <div style={{    width: "100%"}}><CardImg top width="100%" src={require("assets/images/Screenit_SelectMedia.png")} alt="Card image cap" />  </div> 
        <CardBody>
          <h3 className="card-title">---</h3>
          <CardSubtitle>{"Type: ---" }</CardSubtitle>
          <CardText>---</CardText>
          <Button  variant="raised" className="bg-primary text-white MediaContainerVideoButton">Replace Media</Button>
          <Button  variant="raised" className="bg-primary text-white MediaContainerVideoButton">Add New Version</Button>
          <Button  variant="raised" className="bg-primary text-white MediaContainerVideoButton">Delete Version</Button>
      </CardBody>
</Card>

    </div>
  );
};


export default PlaceholderMediaContainer;


export  const ClientsGetProjectList = ()=>{

};

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {Card, CardBody, CardImg, CardSubtitle, CardText} from 'reactstrap';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import Plyr from 'plyr';
import PlaceholderMediaContainer from '../containers/PlaceholderMediaContainer';
import './plyr.css';
import { Player } from 'video-react';
import "video-react/dist/video-react.css"; // import css
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  INIT_URL,
  SIGNOUT_USER_SUCCESS,
  USER_DATA,
  USER_TOKEN_SET,
  USER_DATA_INFO, 
  SCREENIT_CLIENT, SCREENIT_MEDIAENTRY, SCREENIT_PROJECT,SCREENIT_PUBLICLINK, SCREENIT_USER, SCREENIT_MEDIAENTRY_SET ,SCREENIT_UPDATECURRENTTIME

} from "../constants/ActionTypes";
// const player = new Plyr('#player');
let player = <Player/>;
let MenuItemss = <div></div>;
let MediaComponent = <div><CardImg top width="100%" src={require("assets/images/Screenit_SelectMedia.png")} alt="Card image cap" /></div>;
const VideoContainer = (props) => {
  const dispatch = useDispatch();

  let userinfo = useSelector(state => state.screenit.selectedMediaInfo);
  let viewcontainertype = useSelector(state => state.screenit.selectedMediaViewer);
  let viewcontainer = <PlaceholderMediaContainer/>;

  if(viewcontainertype == "Video"){
viewcontainer = <Player style={{    width: "100%"}}
playsInline
poster={require('assets/images/Screenit_PlayVideo.png')}
src={userinfo.MediaFiles[0].url}
onClick={
  handleChangeVideo}
/> 
  }
  const token = useSelector(state => state.screenit.token);

  var mediup = false;
  // if(userinfo.Name != null){
  //   mediup = true;
  //   MediaComponent =<div> <div onClick={GetCurrentime} style={{    width: "100%"}}><video   style={{    width: "100%"}} id="player" playsinline controls={ ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen']} data-poster="/path/to/poster.jpg">
  //   <source src={this.props.MediaUrl} type="video/mp4" />
  //   {/* <source src={userinfo.MediaFiles[0].url} type="video/mp4" /> */}
  // </video>   </div>  </div>
  
  // ;
  // }
 
  // <MenuItem value="t">gd</MenuItem>);
  console.log("******************************************");
  console.log(userinfo);
  console.log(typeof clientt);
  console.log("******************************************");


  function handleChange(e){
  

    // console.log(e);
   


    console.log(e);


    props.changed(e.target.value);
  }

  function handleChangeVideo(e){
  

    // console.log(e);
   


    console.log("VIDEOOOOO");
    console.log(e);


    props.changed(e.target.value);
  }
  function GetCurrentime(e){
    console.log("VIDEOOOOO 1");
    // const { playerr } = this.player.getState();
    // console.log(playerr.currentTime); // print current time
    dispatch({type:SCREENIT_UPDATECURRENTTIME,payload:e.target.currentTime})
// console.log(player);
console.log(e.target);
console.log(e.target.currentTime);

  }
  function RefreshWindow(){

    this.forceUpdate();


  }
  return (

    <div style={{    paddingRight: "1em",
     paddingLeft: "1em"}}>
        <Card className="shadow border-0">
        {/* {MediaComponent} */}
        <div  onClick={GetCurrentime} style={{    width: "100%"}}> 
       {viewcontainer}

         </div> 
        <CardBody>
          <h3 className="card-title">{userinfo.Name}</h3>
          <CardSubtitle>{"Type: " + userinfo.Type}</CardSubtitle>
          <CardText>{userinfo.Description}</CardText>
          <Button onClick={GetCurrentime} variant="raised" className="bg-primary text-white">Replace Media</Button>
          <Button onClick={GetCurrentime} variant="raised" className="bg-primary text-white">Add New Version</Button>
          <Button onClick={GetCurrentime} variant="raised" className="bg-primary text-white">Delete Version</Button>
          <Button onClick={RefreshWindow} variant="raised" className="bg-primary text-white">Reload Window</Button>
       </CardBody>
</Card>

    </div>
  );
};


export default VideoContainer;

export const CheckSelectedVideo = (props) => {
const choice = useSelector(state => state.screenit.selectedMediaInfo);
console.log(choice);


  return (
    choice
  )
}


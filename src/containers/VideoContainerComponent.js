import React, {useEffect, useState,Component} from 'react';
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
import './plyr.css';
import { Player } from 'video-react';
import "video-react/dist/video-react.css"; // import css
import VideoThumbnail from 'react-video-thumbnail'; // use npm published version
import './containersstyle.css';
class VideContainerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { time:0,
      CurrentThumbnail:require('assets/images/Screenit_PlayVideo.png')
    
    };
    this.GetCurrentime = this.GetCurrentime.bind(this);
    this.RefreshWindow = this.RefreshWindow.bind(this);
    this.RefreshURLWindow = this.RefreshURLWindow.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }
  handleStateChange(state, prevState) {
    // copy player state to this component's state
    this.setState({
      player: state,
      currentTime: state.currentTime
    });
  }
  GetCurrentime(){

    // var player = new Plyr('#player', {
    //   controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
    //   hideControls:false
    // });
    // console.log("Current Time: ", player.currentTime.toString());


  }
  RefreshWindow(){

    var player = new Plyr('#player', {
      controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
      hideControls:false,
      sources: [
        {
          src: this.props.MediaUrl,
          type: 'video/mp4',
          size: 1920,
        }]
    });
    console.log("Current Time: ", player.currentTime.toString());

  }


  RefreshURLWindow(){

    this.forceUpdate();


  }



  render() { 
    return ( 
      <div style={{    paddingRight: "1em",
       paddingLeft: "1em"}}>
          <Card className="shadow border-0">
          {/* {MediaComponent} */}
          <div onClick={this.GetCurrentime} style={{    width: "100%"}}>
            
          <Player ref={(player) => { this.player = player }} style={{    width: "100%"}}
      playsInline
      poster={this.state.CurrentThumbnail}
      src={this.props.MediaUrl}
    />
            
            {/* <video   style={{    width: "100%"}} id="player" playsinline controls={ ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen']} data-poster="/path/to/poster.jpg">
      <source src={this.props.MediaUrl} type="video/mp4" />
    </video>  */}
    
    
      </div> 
      <div className="videomediacontainer">
      <VideoThumbnail className="videomediacontainer"
    videoUrl={this.props.MediaUrl}
    thumbnailHandler={(thumbnail) => {
      
      this.setState({CurrentThumbnail:thumbnail});console.log(thumbnail)}}
    width={1920}
    height={1080}
    />

      </div>
          <CardBody>
            <h3 className="card-title">{this.props.MediaEntry.Name}</h3>
            <CardSubtitle>{"Type: " + this.props.MediaEntry.Type}</CardSubtitle>
            <CardText>{this.props.MediaEntry.Description}</CardText>
            <Button onClick={this.GetCurrentime} variant="raised" className="bg-primary text-white">Replace Media</Button>
            <Button onClick={this.GetCurrentime} variant="raised" className="bg-primary text-white">Add New Version</Button>
            <Button onClick={this.GetCurrentime} variant="raised" className="bg-primary text-white">Delete Version</Button>
            <Button onClick={this.RefreshWindow} variant="raised" className="bg-primary text-white">Reload Window</Button>
            <Button onClick={this.RefreshURLWindow} variant="raised" className="bg-primary text-white">Refresh URL</Button>
         </CardBody>
  </Card>
  
      </div> );
  }
}
 
export default VideContainerComponent;


import {INIT_URL, SIGNOUT_USER_SUCCESS, USER_DATA, USER_TOKEN_SET,USER_DATA_INFO , SCREENIT_CLIENT,SCREENIT_UPDATECURRENTTIME, SCREENIT_MEDIAENTRY, SCREENIT_PROJECT,SCREENIT_PUBLICLINK, SCREENIT_USER, SCREENIT_MEDIAENTRY_SET } from "../constants/ActionTypes";
import React, { Component }  from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css"; // import css
import PlaceholderMediaContainer from '../containers/PlaceholderMediaContainer';

const INIT_STATE = {
  token: {},
  initURL: '',
  authUser: {},
  userInfo:{},
  clientsInfo:{},
  projectsInfo:{},
  mediaentriesInfo:{},

  clientsAll:{},
  projectsAll:{},
  mediaentriesAll:{},
  publiclinksAll:{},
  publiclinksInfo:{},
  selectedClientInfo:{},
  selectedProjectInfo:{},
  selectedMediaInfo:{},
  selectedMediaViewer:"None",
  videocurrenttime:0



};

export default (state = INIT_STATE, action) => {
  switch (action.type) {


    case INIT_URL: {
      return {...state, initURL: action.payload};
    }

    case SIGNOUT_USER_SUCCESS: {
      return {
        ...state,
        token: null,
        authUser: null,
        initURL: ''
      }
    }

    case SCREENIT_CLIENT: {
      return {
        ...state,
        selectedClientInfo: action.payload,
        projectsInfo: action.payload.Projects,
        
      };
    }
    case SCREENIT_PROJECT: {
      return {
        ...state,
        selectedProjectInfo: action.payload,
        mediaentriesInfo: action.payload.MediaEntries,
        
      };
    }
    case SCREENIT_UPDATECURRENTTIME: {
      return {
        ...state,
        videocurrenttime: action.payload,
        
        
      };
    }
    case SCREENIT_MEDIAENTRY_SET: {
      return {
        ...state,
        selectedMediaInfo: action.payload,
        selectedMediaViewer: action.payload.Type
        
      };
    }
    case SCREENIT_USER: {
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
      console.log(action.payload);
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
      return {
        ...state,
        token: action.payload.jwt,
        authUser: action.payload.user,
        userInfo: action.payload.user,
        clientsAll: action.payload.user.Clients,
        projectsAll: action.payload.user.Projects,
        mediaentriesAll: action.payload.user.MediaEntries,
        publiclinksAll: action.payload.user.SharedLinks,
        clientsInfo: action.payload.user.Clients,
      };
    }


    case USER_TOKEN_SET: {
      return {
        ...state,
        token: action.payload,
      };
    }

    default:
      return state;
  }
}

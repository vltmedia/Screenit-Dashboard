import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  INIT_URL,
  SIGNOUT_USER_SUCCESS,
  USER_DATA,
  USER_TOKEN_SET,
  USER_DATA_INFO, 
  SCREENIT_CLIENT, SCREENIT_MEDIAENTRY, SCREENIT_PROJECT,SCREENIT_PUBLICLINK, SCREENIT_USER, SCREENIT_MEDIAENTRY_SET 

} from "../constants/ActionTypes";
import axios from 'util/Api'
// import axios from 'axios'

export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url
  };
};

export const userSignUp = ({name, email, password}) => {
  console.log(name, email, password);
  return (dispatch) => {
    dispatch({type: FETCH_START});
    axios.post('auth/register', {
        email: email,
        password: password,
        name: name
      }
    ).then(({data}) => {
      console.log("data:", data);
      if (data.result) {
        localStorage.setItem("token", JSON.stringify(data.token.access_token));
        axios.defaults.headers.common['Authorization'] = "Bearer " + data.token.access_token;
        dispatch({type: FETCH_SUCCESS});
        dispatch({type: USER_TOKEN_SET, payload: data.token.access_token});
        dispatch({type: USER_DATA, payload: data.user});
      } else {
        console.log("payload: data.error", data.error);
        dispatch({type: FETCH_ERROR, payload: "Network Error"});
      }
    }).catch(function (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
};

export const userSignIn = ({email, password}) => {
  return (dispatch) => {
    console.log("email: ", email);
    console.log("password: ", password);
    dispatch({type: FETCH_START});
    axios.defaults.baseURL = "http://67.205.187.138:1340";
    axios.post('/auth/local', {
      identifier: email,
        password: password,
      }, {
        headers: {
          // 'application/json' is the modern content-type for JSON, but some
          // older servers may use 'text/json'.
          // See: http://bit.ly/text-json
          'Content-Type': 'application/json'
        }}    ).then(({data}) => {

      console.log("userSignIn: ", data);
      if (data.jwt) {
        localStorage.setItem("token", JSON.stringify(data.jwt));
        axios.defaults.headers.common['Authorization'] = "Bearer " + data.jwt;
        dispatch({type: FETCH_SUCCESS});
        dispatch({type: SCREENIT_USER, payload: data});
        dispatch({type: USER_TOKEN_SET, payload: data.jwt});
        dispatch({type: USER_DATA_INFO, payload: data.user});
        dispatch({type: USER_DATA, payload: data.user});

      } else {
        dispatch({type: FETCH_ERROR, payload: data.error});
      }
    }).catch(function (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
      console.log(error);
      console.log("Error****:", error.message);
    });
  }
};

export const getUser = () => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    axios.post('auth/me',).then(({data}) => {
      console.log("userSignIn: ", data);
      if (data.result) {
        dispatch({type: FETCH_SUCCESS});
        dispatch({type: USER_DATA, payload: data.user});
      } else {
        dispatch({type: FETCH_ERROR, payload: data.error});
      }
    }).catch(function (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
};


export const userSignOut = () => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    // axios.post('auth/logout',
    // ).then(({data}) => {
    //   if (data.result) {
        dispatch({type: FETCH_SUCCESS});
        localStorage.removeItem("token");
        dispatch({type: FETCH_SUCCESS});
        dispatch({type: SIGNOUT_USER_SUCCESS});
    //   } else {
    //     dispatch({type: FETCH_ERROR, payload: data.error});
    //   }
    // }).catch(function (error) {
    //   dispatch({type: FETCH_ERROR, payload: error.message});
    //   console.log("Error****:", error.message);
    // });
  }
};

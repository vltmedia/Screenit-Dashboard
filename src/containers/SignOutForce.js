import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IntlMessages from 'util/IntlMessages';
import {userSignIn} from 'actions/Auth';
import CircularProgress from "@material-ui/core/CircularProgress";
import {NotificationContainer, NotificationManager} from "react-notifications";
import UploadMediaEntry from '../components/UploadMediaEntry';
import {userSignOut} from '../actions/Auth';
import {Redirect, Route, Switch} from "react-router-dom";
const SignOutForce = (props) => {

  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('demo#123');
  const dispatch = useDispatch();
  const token = useSelector(({auth}) => auth.token);
  const {loading, message} = useSelector(({common}) => common);

  dispatch(userSignOut());

  useEffect(() => {
    if (token !== null) {
      props.history.push('/');
    }
  }, [token]);

  return (
    <div
      className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
      <div className="app-login-main-content">
<Redirect to={'/signin'}/>

       <h1>Signing Out</h1>
    </div>
    </div>
  );
};


export default SignOutForce;

import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar'
import {useDispatch, useSelector} from 'react-redux'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {userSignOut} from 'actions/Auth';

import IntlMessages from 'util/IntlMessages';
import { auth } from 'firebase';

const UserInfo = () => {

  const dispatch = useDispatch();

  const [anchorE1, setAnchorE1] = useState(null);
  const [open, setOpen] = useState(false);
  let jwt = useSelector(state => state.auth.token);
  // let jwt = useSelector(state => state.auth.authUser.jwt);
  let userinfoo = useSelector(state => state.auth.userInfo);
  let usernamee = "";

  try{
  usernamee = userinfoo.username;
  }catch{
    alert("Fuck I FAILED A");
    handleRequestClose();
    // dispatch(userSignOut());
  }
  // if(userinfoo.username == null){
  if(jwt == null){
    alert("Fuck I FAILED B");

    // dispatch(userSignOut());
    window.location.reload(true);
  }
  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
  console.log(userinfoo);
  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
  const handleClick = event => {
    setOpen(true);
    setAnchorE1(event.currentTarget);
  };

  const handleRequestClose = () => {
    setOpen(false);
  };

  return (
    <div className="user-profile d-flex flex-row align-items-center">
      <Avatar
        alt='...'
        src={"https://via.placeholder.com/150x150"}
        className="user-avatar "
      />
      <div className="user-detail">
          <h4 className="user-name d-flex" onClick={handleClick}><span className='text-truncate'>{useSelector(state => state.screenit.userInfo.username)}</span> <i
          className="zmdi zmdi-caret-down zmdi-hc-fw align-middle"/>
        </h4>
      </div>
      <Menu className="user-info"
            id="simple-menu"
            anchorEl={anchorE1}
            open={open}
            onClose={handleRequestClose}
            PaperProps={{
              style: {
                minWidth: 120,
                paddingTop: 0,
                paddingBottom: 0
              }
            }}
      >
        <MenuItem onClick={handleRequestClose}>
          <i className="zmdi zmdi-account zmdi-hc-fw mr-2"/>
          <IntlMessages id="popup.profile"/>
        </MenuItem>
        <MenuItem onClick={handleRequestClose}>
          <i className="zmdi zmdi-settings zmdi-hc-fw mr-2"/>
          <IntlMessages id="popup.setting"/>
        </MenuItem>
        <MenuItem onClick={() => {
          handleRequestClose();
          dispatch(userSignOut());
        }}>
          <i className="zmdi zmdi-sign-in zmdi-hc-fw mr-2"/>

          <IntlMessages id="popup.logout"/>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserInfo;



import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
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
let MenuItemss = <div></div>;
const MediaEntryMenuList = (props) => {
  const dispatch = useDispatch();

  // let clientt;
  const clientttt = useSelector(state => state.screenit.mediaentriesInfo);
  console.log(props);
  console.log(clientttt);
  // console.log(clientttt[0].Name);
  const token = useSelector(state => state.screenit.token);
  try{
  if(clientttt[0].Name != null)
{
  MenuItemss = clientttt.map((number) =>
  // console.log(number));
<MenuItem value={number.Name}>{number.Name}</MenuItem>);
  }else{

    MenuItemss =<MenuItem value="NONE">NONE</MenuItem>;
  }}catch{
    MenuItemss =<MenuItem value="NONE">NONE</MenuItem>;

  }
  // <MenuItem value="t">gd</MenuItem>);
  console.log("******************************************");
  console.log(clientttt);
  console.log(MenuItemss);
  console.log(typeof clientttt);
  console.log(typeof MenuItemss);
  console.log("******************************************");


  function handleChange(e){

    // console.log(e);
    var headerr = {headers:{
      Authorization: 'Bearer '+token
    }}

    var findd = clientttt.find(elem => elem.Name == e.target.value);

    console.log(findd);
    console.log(headerr);
    axios.get('http://67.205.187.138:1340/media-entries/'+ findd.id.toString(),headerr).then(({data}) => {
      dispatch({type: SCREENIT_MEDIAENTRY_SET, payload: data});
      console.log(data);
      props.changed(data);


    });

  }
  return (

    <div style={{    paddingRight: "1em",
    paddingLeft: "1em"}}>
          <FormControl className="w-100 mb-2">
    <InputLabel htmlFor="age-simple">Media Entries</InputLabel>
    <br></br>

    <Select id="clientselect" defaultValue={'DEFAULT'}
            value={ useSelector(state => state.screenit.selectedMediaInfo.Name)}
    
            onChange={handleChange}
            input={<Input id="age-simple" /> }
        autoWidth >
        <MenuItem value="">
            <em>None</em>
        </MenuItem>
        {MenuItemss}
     </Select>
     <FormHelperText>Auto width</FormHelperText>
</FormControl>


    </div>
  );
};


export default MediaEntryMenuList;

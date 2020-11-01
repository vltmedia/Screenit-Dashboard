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

} from "../../constants/ActionTypes";
let MenuItemss = <div></div>;
let statee = {

};
let clientchoice = "NOONOO";
const SelectDropDown = (props) => {
  const dispatch = useDispatch();

  const token = useSelector(state => state.screenit.token);
  try{
  if(props.items[0].name != null)
{
  MenuItemss = props.items.map((number) =>
<MenuItem value={number.name}>{number.name}</MenuItem>);
  }else{

    MenuItemss =<MenuItem value="NONE">NONE</MenuItem>;
  }}catch{
    MenuItemss =<MenuItem value="NONE">NONE</MenuItem>;

  }
  

  function handleChange(e){

 
    props.changed(e.target.value);

  }
  return (

    <div style={{    paddingRight: "1em",
    paddingLeft: "1em"}}>
          <FormControl className="w-100 mb-2" >
    <InputLabel htmlFor="age-simple">{props.title}</InputLabel>
    <br></br>

    <Select id="clientselect2" defaultValue={'DEFAULT'}
            onChange={handleChange}
            input={<Input id="age-simple" /> }
        autoWidth >
        <MenuItem value="">
            <em>None</em>
        </MenuItem>
        {MenuItemss}
     </Select>
     <FormHelperText>{props.subtitle}</FormHelperText>
</FormControl>


    </div>
  );
};


export default SelectDropDown;

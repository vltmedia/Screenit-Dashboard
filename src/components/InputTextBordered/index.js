import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import SelectDropDown from '../SelectDropDown';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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

// Version to Drop into SVG Group
const InputTextBorderedSVG = (props) => {
  const dispatch = useDispatch();

  const token = useSelector(state => state.screenit.token);
 

  function handleChange(e){

 
    props.changed(e.target.value);

  }
  return (

<svg viewBox="0 0 1198 953">
<g transform="translate(0)">
            <g transform="translate(0 0)">
              <g className="h" transform="translate(0 8)">
                <rect className="ae" width={props.maskwidth} height={props.maskwidth} rx={4} />
                <rect className="a" x={1} y={1} width={props.boxwidth} height={props.boxheight} rx={3} />
              </g>
              <rect
                className="c"
                width={props.maskwidth}
                height={props.maskheight}
                transform="translate(11 6)"
              />
              <text className="j" transform="translate(17 11)">
                <tspan x={0} y={0}>
                  {props.header}
                </tspan>
              </text>


            
              <foreignObject width="460" height="150"  className="i" transform="translate(15 28)">
      <div xmlns="http://www.w3.org/1999/xhtml">
      <input className="MediaEntryInput-Media" onChange={props.onChange}></input>
</div>
  </foreignObject>
  </g>
              </g>
</svg>




  );
};



// Non SVG version.
const InputTextBordered = (props) => {
  const dispatch = useDispatch();

  const token = useSelector(state => state.screenit.token);
 

  function handleChange(e){

 
    props.changed(e.target.value);

  }
  return (



<svg viewBox="0 0 1198 953">
<g transform="translate(0)">
            <g transform="translate(0 0)">
              <g className="h" transform="translate(0 8)">
                <rect className="ae" width={props.maskwidth} height={props.maskwidth} rx={4} />
                <rect className="a" x={1} y={1} width={props.boxwidth} height={props.boxheight} rx={3} />
              </g>
              <rect
                className="c"
                width={props.maskwidth}
                height={props.maskheight}
                transform="translate(11 6)"
              />
              <text className="j" transform="translate(17 11)">
                <tspan x={0} y={0}>
                  {props.header}
                </tspan>
              </text>


            <g transform="translate(0 0)">
              <g className="h" transform="translate(0 8)">
                <rect className="ae" width={600} height={68} rx={4} />
                
                <rect className="a" x={1} y={1} width={340} height={66} rx={3} />
              </g>
              <rect
                className="c"
                 width={props.maskwidth}
                //  width={props.maskwidth}
                height={props.maskheight}
                transform="translate(11 6)"
              />
              <text className="j" transform="translate(17 11)">
                <tspan x={0} y={0}>
                  {props.header}
                </tspan>
              </text>


              <foreignObject width={500} height={125}  className="i" transform={props.transform}>
      <div xmlns="http://www.w3.org/1999/xhtml">
      <input className="MediaEntryInput-Media" onChange={props.onChange}></input>
          </div>
  </foreignObject>
              
              </g>
              </g>
              </g>
              </svg>


  );
};


export  {InputTextBordered, InputTextBorderedSVG};

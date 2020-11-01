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
const SelectDropDownBordered = (props) => {
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

<div style={{    height: "5em"}}>
<svg viewBox="0 0 1198 953">
      <defs>
        <style>
          {
            ".a,.ad,.h{fill:none;}.b{clip-path:url(#o);}.ab,.c{fill:#fff;}.d{fill:rgba(0,0,0,0.6);letter-spacing:0.018em;}.ab,.d,.g,.l{font-size:14px;}.ab,.d,.g,.i,.j,.l,.r,.u,.w,.z{font-family:Roboto-Regular, Roboto;}.e{fill:url(#a);}.f{fill:rgba(0,0,0,0.12);}.aa,.ac,.f{opacity:0.995;}.g,.l{fill:rgba(0,0,0,0.87);}.ab,.g,.u{letter-spacing:0.018em;}.h,.t{stroke:#6200ee;}.h{stroke-width:2px;}.i{fill:rgba(0,0,0,0.38);letter-spacing:0.009em;}.i,.r{font-size:16px;}.j,.v{fill:#6200ee;}.j,.w{font-size:12px;}.j,.r,.w,.z{letter-spacing:0.034em;}.k,.u{fill:#6100ed;}.l{letter-spacing:0.017em;}.m{opacity:0.5;}.n{opacity:0.995;}.o{opacity:0.1;}.aa,.p,.q,.w,.x,.y,.z{fill:#a470f4;}.p{opacity:0.4;}.r{fill:#707070;}.s{clip-path:url(#m);}.t{fill:rgba(63,0,223,0.12);}.u,.z{font-size:10px;}.v,.x,.y{fill-rule:evenodd;}.x{opacity:0.23;}.ac{fill:#ec3f74;}.ad{stroke:#dbc6fb;}.ae{stroke:none;}.af{filter:url(#k);}.ag{filter:url(#i);}.ah{filter:url(#g);}.ai{filter:url(#e);}.aj{filter:url(#c);}"
          }
        </style>
        <pattern
          id="a"
          preserveAspectRatio="xMidYMid slice"
          width="100%"
          height="100%"
          viewBox="0 0 360 360"
        >
          <image width={360} height={360} xlinkHref="ComponentTMP_0-image.png" />
        </pattern>
        <filter
          id="c"
          x={823}
          y={146}
          width={317}
          height={52}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={1} input="SourceAlpha" />
          <feGaussianBlur stdDeviation={1.5} result="d" />
          <feFlood floodOpacity={0.2} />
          <feComposite operator="in" in2="d" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="e"
          x={823}
          y={250}
          width={317}
          height={53}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={1} input="SourceAlpha" />
          <feGaussianBlur stdDeviation={1.5} result="f" />
          <feFlood floodOpacity={0.2} />
          <feComposite operator="in" in2="f" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="g"
          x={823}
          y={354}
          width={317}
          height={53}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={1} input="SourceAlpha" />
          <feGaussianBlur stdDeviation={1.5} result="h" />
          <feFlood floodOpacity={0.2} />
          <feComposite operator="in" in2="h" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="i"
          x={1106.5}
          y={736}
          width={29}
          height={29}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={1} input="SourceAlpha" />
          <feGaussianBlur stdDeviation={1.5} result="j" />
          <feFlood floodOpacity={0.212} />
          <feComposite operator="in" in2="j" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="k"
          x={823}
          y={457}
          width={317}
          height={53}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={1} input="SourceAlpha" />
          <feGaussianBlur stdDeviation={1.5} result="l" />
          <feFlood floodOpacity={0.2} />
          <feComposite operator="in" in2="l" />
          <feComposite in="SourceGraphic" />
        </filter>
        <clipPath id="m">
          <rect className="a" width={312} height={159} />
        </clipPath>
        <clipPath id="o">
          <rect width={1198} height={953} />
        </clipPath>
      </defs>
<g transform="translate(0)">
            <g transform="translate(0 0)">
              <g className="h" transform="translate(0 8)">
                <rect className="ae" width={342} height={68} rx={4} />
                <rect className="a" x={1} y={1} width={340} height={66} rx={3} />
              </g>
              <rect
                className="c"
                width={77}
                height={11}
                transform="translate(11 6)"
              />
              <text className="j" transform="translate(17 11)">
                <tspan x={0} y={0}>
                  {"Client"}
                </tspan>
              </text>


              <foreignObject width="327" height="150"  className="i" transform="translate(2 0)">
      <div xmlns="http://www.w3.org/1999/xhtml">
      <SelectDropDown changed={props.changed} title=""  subtitle="" defaultval={props.Client} items={props.items} className={props.classname} />
          </div>
  </foreignObject>
              

</g>
</g>
</svg>

</div>



  );
};


export default SelectDropDownBordered;

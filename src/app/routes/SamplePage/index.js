import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {Collapse, List, ListItem, ListItemText} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useDispatch, useSelector} from 'react-redux'
import ClientsMenuList from '../../../containers/Clients';
import ProjectsMenuList from '../../../containers/Projects';
import MediaEntryMenuList from '../../../containers/MediaEntryMenuList';
import VideoContainer from '../../../containers/VideoContainer';
import Avatar from '@material-ui/core/Avatar';

class SamplePage extends React.Component {

  constructor(props){

    super(props);
    this.state = {
      singedin: false,
      username: '',
      password: '',
      error: '',
      email: '',
      setEmail: '',
      setPassword: '',
      signinginfo:{},
      open:false,
      age:"h",
      startedup:false,
      ProjectsHtml:<ProjectsMenuList  changed={this.handleChangeClient.bind(this)}/>,
      MediaEntriesHtml:<MediaEntryMenuList  changed={this.handleChangeClient.bind(this)}/>
      
  };
this.handleClick = this.handleClick.bind(this);
this.handleChange = this.handleChange.bind(this);
this.getclients = this.getclients.bind(this);
this.handleChangeClient = this.handleChangeClient.bind(this);
this.handleChangeProject = this.handleChangeProject.bind(this);
this.handleChangeMediaEntry = this.handleChangeMediaEntry.bind(this);

  }
  // dispatch = useDispatch();
componentDidMount(){
  this.setState({startedup:true});
}
  handleClick(){

    this.setState({open: true})
  }
  handleChange(e){

    if(this.state.startedup){
    this.setState({age: e})
    }
  }
  handleChangeClient(client){

    if(this.state.startedup){
    console.log("FUCK IT WORKED ",client);
    this.setState({ProjectsHtml:<ProjectsMenuList ProjectsList={["Hey", "You"]}  changed={this.handleChangeProject.bind(this)}/>});
    }



  } 
  
  
  handleChangeProject(project){

    if(this.state.startedup){
    console.log("FUCK IT WORKED ",project);
    this.setState({MediaEntryMenuList:<MediaEntryMenuList ProjectsList={["Hey", "You"]}  changed={this.handleChangeMediaEntry.bind(this)}/>});
    }

  }
  handleChangeMediaEntry(project){

    if(this.state.startedup){
    console.log("FUCK IT WORKED ",project);
    // this.setState({MediaEntryMenuList:<MediaEntryMenuList ProjectsList={["Hey", "You"]}  changed={this.handleChangeClient.bind(this)}/>});
    }
  }
  getclients = () => {
  let clientslinfo = useSelector(state => state.auth.userInfo.Clients);
  const MenuItemss = clientslinfo.map((number) =>
  <MenuItem>{number.Name}</MenuItem>
);
return MenuItemss;
    // const [allowances, setAllowances] = useState([]);
  }
  
  render() {
  // const dispatch = useDispatch();
  // let clientslinfo = useSelector(state => state.auth.userInfo.Clients);


    return (
      <div className="app-wrapper">
        <ContainerHeader match={this.props.match} title={<IntlMessages id="pages.samplePage"/>}/>

          <div>
        <div className="d-flex justify-content-center">
          
        <ClientsMenuList changed={this.handleChangeClient.bind(this)}/>
        {this.state.ProjectsHtml}

        {this.state.MediaEntriesHtml}



</div>
<VideoContainer/>
</div>

        </div>




    );
  }
}

export default SamplePage;
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/styles";
import { Button, Hidden, Toolbar, Typography } from "@material-ui/core";

import { useStyles } from "./styles";
import LogoDarkBig from "../../assets/images/logos/header-logo.png";
import LogoLightBig from "../../assets/images/logos/header-logo.png";
import {  useNavigate  } from "react-router-dom";
import {MdOutlineLocationOn} from "react-icons/md"
import {FiPhoneCall} from 'react-icons/fi'
import { GlobalRoutes } from "../../GlobalRouter/Routes";

const OfflineHeader = (props) => {
  const navigate = useNavigate();
 
  const handleLogoClick=()=>{
    navigate(GlobalRoutes.WELCOME.path);
}

const handleTrainTheTrainer=()=>{
navigate(GlobalRoutes.TRAIN_THE_TRAINER.path);
}

const handleContactUs=()=>{
  window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSe9NRizn3tvX5Hq90up0hcv0l9oeqVHpRRaOvC1YCgB_AZUFg/viewform?usp=sf_link";
}
<Button className={props.classes.registerNowbtn}>Register Now</Button>


  return (<>
{/*   <Hidden smUp>
  <AppBar  >
      <Toolbar className={props.classes.eventToolbar} >
       <Typography>Become a certified dog trainer in 10 days!</Typography>
       <div style={{display:"flex", justifyContent:"space-around"}}>
       <Typography  style={{color:"#01b7ff"}}>(22nd Feb - 3rd Mar)</Typography>
      <Button className={props.classes.registerNowbtn} style={{fontSize:14, padding:0}} onClick={handleTrainTheTrainer}>Register Now</Button>
       </div>

        </Toolbar>
    </AppBar></Hidden>
    <Hidden  only={"xs"}>
    <AppBar  >
      <Toolbar style={{background:"black", width:"-webkit-fill-available",color:"white", margin:"auto", padding:"0px 75px", display:"flex", justifyContent:"space-between"}} >
      <Typography style={{fontSize:24}}><span ><MdOutlineLocationOn style={{paddingTop:8}}/></span>Bangalore | Events</Typography>
      <Typography style={{fontSize:24}}>Become a certified dog trainer in 10 days! <span  style={{color:"#01b7ff"}}>(22 Feb - 3 Mar)</span></Typography>
      <Button className={props.classes.registerNowbtn} onClick={handleTrainTheTrainer}>Register Now</Button>
      </Toolbar>
    </AppBar>
    </Hidden> */}
   
    <AppBar
      classes={{ root: props.trigger ? props.classes.triggeredRoot : props.classes.appBarRoot }}
      elevation={props.trigger ? 24 : 0}
      >
      <Toolbar classes={{ root: props.classes.toolBarRoot }}>
        <div className={props.classes.toolBarDiv}>
          <img
            src={props.trigger ? LogoDarkBig : LogoLightBig}
            alt="logo"
            className={props.classes.logo}
            onClick={props.scrollToHome}
          />
          <div className={props.classes.buttonsDiv}>
          <Hidden only={"xs"}>
              <Button
                className={props.trigger ?props.classes.hoverBtn:props.classes.btn}
                onClick={handleLogoClick}
              >
                HOME
              </Button>
              <Button
                 className={props.trigger ?props.classes.hoverBtn:props.classes.btn}
                onClick={props.scrollToServices}
              >
                SERVICES
              </Button>
             {/*  <Button
                 className={props.trigger ?props.classes.hoverBtn:props.classes.btn}
              
              >
               ABOUT US
              </Button> */}
              <Button
                 className={props.trigger ?props.classes.hoverBtn:props.classes.btn}
             onClick={handleContactUs}
              >
              CONTACT US
              </Button>
              </Hidden>
              <Hidden smUp>
              <Button style={{cursor:"none",cursor:"pointer"}}
                 className={props.trigger ?props.classes.hoverBtn:props.classes.btn}
                           >
                             <FiPhoneCall style={{marginRight:10}}/>
                +91 8951133804
              </Button>
                </Hidden>
          
          </div>
        </div>
      </Toolbar>
    </AppBar>
    </>
  
  );
};

export default withStyles(useStyles)(OfflineHeader);

import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/styles";
import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Grid, Hidden, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Carousel from 'react-material-ui-carousel'
import { useStyles } from "./styles";
import Boarding from '../../../assets/images/services/boarding.jpg'
import Behaviour from '../../../assets/images/services/behaviour.png'
import Pickup from '../../../assets/images/services/Pickupanddrop.jpg'
import Swimming from '../../../assets/images/services/swimming.jpg'
import Training from '../../../assets/images/services/training.jpg'
import Grooming from '../../../assets/images/services/grooming.jpg'




import {MdOutlineDoubleArrow} from 'react-icons/md'
const Services = (props) => {

  return (
  <>
   <Grid container spacing ={4} style={{margin:"50px auto", display:"flex", justifyContent:"center", width:"80%", }}>
       <Grid item sm={4}>
           <Card style={{borderRadius:25, boxShadow:"2px 2px 2px 4px #00000026",padding:"30px 0px", height:"100%"}}>
           <Typography variant="h2" style={{color:"black", textAlign:"center", fontSize:30, fontWeight:700, marginBottom:30}}>BOARDING</Typography>   
               <CardMedia
        component="img"
        height="194"
        image={Boarding}
        alt="Paella dish"
        style={{objectFit:"unsset"}}
      />
      <CardContent>
      <Typography  style={{color:"black", fontSize:14}}>
          <Typography  style={{color:"black", margin:20}}>We provide the best quality care for your four-legged family member in a healthy, secure and nurturing environment.</Typography> 
       </Typography>   
</CardContent>
<CardActions disableSpacing style={{display:"flex", justifyContent:"center"}}>
     <Button style={{background:"#4fccfd", color:"black", background: "rgb(79, 204, 253)",

color: "black",

height: "50px",

fontSize: "16px",

fontWeight: "700",

borderRadius: "25px",

padding: 25}}>Know More</Button>
      </CardActions>
           </Card>
       </Grid>
       <Grid item sm={4}>
           <Card style={{borderRadius:25, boxShadow:"2px 2px 2px 4px #00000026",padding:"30px 0px", height:"100%"}}>
           <Typography variant="h2" style={{color:"black", textAlign:"center", fontSize:30, fontWeight:700, marginBottom:30}}>Grooming</Typography>   
               <CardMedia
        component="img"
        height="194"
        image={Grooming}
        alt="Paella dish"
        style={{objectFit:"unsset"}}
      />
      <CardContent>
      <Typography  style={{color:"black", fontSize:14}}>
          <Typography  style={{color:"black", margin:20}}>Dogs had too much fun at the park and are now too muddy? A hectic work week just ended for you and you want to relax through your weekend?</Typography> 
       </Typography>   
</CardContent>
<CardActions disableSpacing style={{display:"flex", justifyContent:"center"}}>
     <Button style={{background:"#4fccfd", color:"black", background: "rgb(79, 204, 253)",

color: "black",

height: "50px",

fontSize: "16px",

fontWeight: "700",

borderRadius: "25px",

padding: 25}}>Know More</Button>
      </CardActions>
           </Card>
       </Grid>   <Grid item sm={4}>
           <Card style={{borderRadius:25, boxShadow:"2px 2px 2px 4px #00000026",padding:"30px 0px", height:"100%"}}>
           <Typography variant="h2" style={{color:"black", textAlign:"center", fontSize:30, fontWeight:700, marginBottom:30}}>Swimming</Typography>   
               <CardMedia
        component="img"
        height="194"
        image={Swimming}
        alt="Paella dish"
        style={{objectFit:"unsset"}}
      />
      <CardContent>
      <Typography  style={{color:"black", fontSize:14}}>
          <Typography  style={{color:"black", margin:20}}>Water exercise is ideal for arthritis, improving flexibility, increasing endurance, weight loss, relaxation and confidence building</Typography> 
       </Typography>   
</CardContent>
<CardActions disableSpacing style={{display:"flex", justifyContent:"center"}}>
     <Button style={{background:"#4fccfd", color:"black", background: "rgb(79, 204, 253)",

color: "black",

height: "50px",

fontSize: "16px",

fontWeight: "700",

borderRadius: "25px",

padding: 25}}>Know More</Button>
      </CardActions>
           </Card>
       </Grid>

    
   </Grid>
   <Grid container spacing ={4} style={{margin:"50px auto", display:"flex", justifyContent:"center", width:"80%", }}>
       <Grid item sm={4}>
           <Card style={{borderRadius:25, boxShadow:"2px 2px 2px 4px #00000026",padding:"30px 0px", height:"100%"}}>
           <Typography variant="h2" style={{color:"black", textAlign:"center", fontSize:30, fontWeight:700, marginBottom:30}}>
Pick Up and Drop</Typography>   
               <CardMedia
        component="img"
        height="194"
        image={Pickup}
        alt="Paella dish"
        style={{objectFit:"unsset"}}
      />
      <CardContent>
      <Typography  style={{color:"black", fontSize:14}}>
          <Typography  style={{color:"black", margin:20}}>Hassle free pick up and drop facility for all our services.</Typography> 
       </Typography>   
</CardContent>
<CardActions disableSpacing style={{display:"flex", justifyContent:"center"}}>
     <Button style={{background:"#4fccfd", color:"black", background: "rgb(79, 204, 253)",

color: "black",

height: "50px",

fontSize: "16px",

fontWeight: "700",

borderRadius: "25px",

padding: 25}}>Know More</Button>
      </CardActions>
           </Card>
       </Grid>
       <Grid item sm={4}>
           <Card style={{borderRadius:25, boxShadow:"2px 2px 2px 4px #00000026",padding:"30px 0px", height:"100%"}}>
           <Typography variant="h2" style={{color:"black", textAlign:"center", fontSize:30, fontWeight:700, marginBottom:30}}>Training</Typography>   
               <CardMedia
        component="img"
        height="194"
        image={Training}
        alt="Paella dish"
        style={{objectFit:"unsset"}}
      />
      <CardContent>
      <Typography  style={{color:"black", fontSize:14}}>
          <Typography  style={{color:"black", margin:20}}>Our general obedience program is aimed at those dogs in need of some ‘good manners’ both inside and outside of the home.</Typography> 
       </Typography>   
</CardContent>
<CardActions disableSpacing style={{display:"flex", justifyContent:"center"}}>
     <Button style={{background:"#4fccfd", color:"black", background: "rgb(79, 204, 253)",

color: "black",

height: "50px",

fontSize: "16px",

fontWeight: "700",

borderRadius: "25px",

padding: 25}}>Know More</Button>
      </CardActions>
           </Card>
       </Grid>   <Grid item sm={4}>
           <Card style={{borderRadius:25, boxShadow:"2px 2px 2px 4px #00000026",padding:"30px 0px", height:"100%"}}>
           <Typography variant="h2" style={{color:"black", textAlign:"center", fontSize:30, fontWeight:700, marginBottom:30}}>
Behavioral Correction</Typography>   
               <CardMedia
        component="img"
        height="194"
        image={Behaviour}
        alt="Paella dish"
        style={{objectFit:"unsset"}}
      />
      <CardContent>
      <Typography  style={{color:"black", fontSize:14}}>
          <Typography  style={{color:"black", margin:20}}>The key to resolving behavioral issues is to develop a better understanding of how your dog sees the world.</Typography> 
       </Typography>   
</CardContent>
<CardActions disableSpacing style={{display:"flex", justifyContent:"center"}}>
     <Button style={{background:"#4fccfd", color:"black", background: "rgb(79, 204, 253)",

color: "black",

height: "50px",

fontSize: "16px",

fontWeight: "700",

borderRadius: "25px",

padding: 25}}>Know More</Button>
      </CardActions>
           </Card>
       </Grid>

    
   </Grid>
   
</>
  );
};

export default withStyles(useStyles)(Services);
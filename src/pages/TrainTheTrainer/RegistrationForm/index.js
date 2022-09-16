import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { useState } from 'react'
import { useStyles } from './styles';
import {BsCheckLg} from "react-icons/bs"
import { send } from 'emailjs-com';
const RegistrationForm=(props)=>{
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[number,setNumber]= useState("")
    const[city,setCity]=useState("")

    const handleName=(event)=>{
setName(event.target.value)
    }
    const handleEmail=(event)=>{
        setEmail(event.target.value)

    }
    const handleNumber=(event)=>{
        setNumber(event.target.value)

    }
    const handleCity=(event)=>{
                setCity(event.target.value)

    }
     
    const handleSendMessage=()=>{
        console.log("send message")
        send(
            'service_u7xd2on',
            'template_viev20s',
            {to_name:"kumar", from_name:name,contact_number:number,email:email, city:city},
            'q33-Ga0FNZ7h3oVIZ'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
    }
    return(
        <Grid container className={props.classes.mainGridContainer}>
<Grid item sm={7} xs ={12} className={props.classes.leftItem}>
<Grid Container className={props.classes.feesContainer}>
    <Grid item >
<Typography className={props.classes.header}>
Fees
</Typography>
<Typography className={props.classes.subHeader}>
₹ 1,00,000 /-
</Typography>
    </Grid>
    <Grid item >
<Typography className={props.classes.header}>
Dates
</Typography>
<Typography className={props.classes.subHeader}>
22 Nov to 6 dec 2022
</Typography>
    </Grid>
</Grid>
<Grid container className={props.classes.includedContainer} >
               <Grid item >
                   <Typography className={props.classes.header}>
                   What's Included ?
                   </Typography>
          <Grid container className={props.classes.listContainer}>
              <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>

              120+ hours of classroom and hands-on training</Typography>
             </Grid> 
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>

              1 on 1 Mentoring sessions</Typography>
             </Grid>       
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>
              Hands-on assignments on site</Typography>
             </Grid>    
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>Industry experts as mentors</Typography>
             </Grid>        
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>
Accommodation assistance</Typography>
             </Grid>
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>Program Marksheet</Typography>
             </Grid>
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>
Join the ‘CANAAN K9 Coach" family
</Typography>
             </Grid>
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>Guide on setting up a pet business</Typography>
             </Grid>
             <Grid item className={props.classes.lisItem}>
               <BsCheckLg className={props.classes.tickIcon}/>
              <Typography className={props.classes.list}>
Three K9 Coach t-shirts and 1 pullover/jacket</Typography>
             </Grid>                  
         </Grid>

        </Grid>
   
         </Grid>
</Grid>
<Grid item sm={5} xs ={12} className={props.classes.formContainer}>
   
        <Typography className={props.classes.formHeader}>I’m interested in this programme</Typography>
<Typography className={props.classes.subHeader}>Fill details and reserve your seat with us.</Typography>
<div>
    <Typography className={props.classes.textFieldHeader}> Name*</Typography>
    <TextField  size="small"  className={props.classes.textField} placeholder='Enter your name' onChange={handleName} value={name} ></TextField>
</div>
<div>
    <Typography className={props.classes.textFieldHeader}> Contact Number *</Typography>
    <TextField  size="small"  className={props.classes.textField} placeholder='Enter your contact number' onChange={handleNumber}value={number} ></TextField>
</div>
<div>
    <Typography className={props.classes.textFieldHeader}> Email *</Typography>
    <TextField  size="small"  className={props.classes.textField} placeholder='Enter your Email' onChange={handleEmail}value={email} ></TextField>
</div>
<div>
    <Typography className={props.classes.textFieldHeader}> City*</Typography>
    <TextField  size="small"  className={props.classes.textField} placeholder='Enter your City' onChange={handleCity} value={city} ></TextField>
</div>
<div className={props.classes.btnContainer} >
<Button variant="contained" className={props.classes.btn} onClick={handleSendMessage}>Send Message</Button>

</div>
</Grid>
</Grid>
    )
}

export default withStyles(useStyles)(RegistrationForm);
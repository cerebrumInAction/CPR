export const useStyles = (MUITheme) => ({
    appBarRoot: {
      height: 110,
      padding: "1.714rem",
      /* marginTop:63, */
      background: "white",
      [MUITheme.breakpoints.only("xs")]: {
        padding: 12,
        height: "66px",
      },
    },
    triggeredRoot: {
      height: 110,
      padding: "1.714rem",
      background: "#01b7ff  0% 0% no-repeat padding-box;",
      boxShadow: "0px 3px 6px #00000029",
      color:"black",
      opacity: 1,
      marginTop:63,
      [MUITheme.breakpoints.only("sm")]: {
        height: 96,
      },
      [MUITheme.breakpoints.only("xs")]: {
        padding: 16,
        height: 66,
        marginTop:56
      },
    },
    toolBarRoot: {
      padding: 0,
      display: "contents",
    },
    toolBarDiv: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      alignItems: "center",
      height: "100%",
      cursor: "pointer",
      "@media (max-width:332px)": {
        width: "104%",
      },
    },
    signInBtn: {
      "&:hover": {
        border: `2px solid ${MUITheme.palette.primary.main}`,
      },
    },
    TriggeredSignInBtn: {
      "&:hover": {
        border: `2px solid ${MUITheme.palette.grey.A30}`,
      },
    },
    logo: {
      width: 400,
      height: 100,
      [MUITheme.breakpoints.only("xs")]: {
        width: 140,
        height: 50,
      },
    },
    userBtn: {
      "&:hover": {
        padding: "0.75rem 1.5rem",
        background: "#FFFFFF26 0% 0% no-repeat padding-box",
        borderRadius: 28,
        minWidth: 78,
      },
    },
    bannerText:{
      fontSize:24,
           [MUITheme.breakpoints.only("xs")]: {
        fontSize:16,
      },
    },
    hoverSignUp: {
      "&:hover": {
        border: "2px solid rgb(178, 81, 10)",
      },
    },
    hoverUserBtn: {
      "&:hover": {
        padding: "0.75rem 1.5rem",
        background: "#CFCDD4 0% 0% no-repeat padding-box",
        borderRadius: 28,
        minWidth: 78,
      },
    },
    mobileSignInBtn: {
      border: `1px solid ${MUITheme.palette.grey.A30}`,
      color: "#574F67",
      "&:hover": {
        border: `1px solid ${MUITheme.palette.grey.A30}`,
      },
    },
    buttonsDiv:{
      width: "55%",

      display: "flex",

      justifyContent: "space-evenly"
    },
    btn:{
color:"black",
fontWeight:700,
fontSize:21,

[MUITheme.breakpoints.only("sm")]: {
  fontSize:21,
  fontWeight:700
},
[MUITheme.breakpoints.down("sm")]: {
  fontSize:16,
},
[MUITheme.breakpoints.only("xs")]: {
  fontSize:16,
},
    },
    hoverBtn:{
      
color:"white",
fontWeight:700,
fontSize:21,

[MUITheme.breakpoints.only("sm")]: {
  fontSize:21,
  fontWeight:700
},
[MUITheme.breakpoints.down("sm")]: {
  fontSize:16,
},
[MUITheme.breakpoints.only("xs")]: {
  fontSize:16,
},
    },
    eventToolbar:{
      background:"black", width:"-webkit-fill-available",color:"white", margin:"auto", padding:"0px 75px",
      [MUITheme.breakpoints.only("xs")]: {
      display:"block",
      padding:0,
      textAlign:"center"
      },
    },
    registerNowbtn:{
      border:"2px solid #01b7ff",
      borderRadius:"25px",
      background:"#01b7ff"
    }
  });
  
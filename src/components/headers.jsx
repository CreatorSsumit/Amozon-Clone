import React,{useEffect} from 'react';
import { fade, makeStyles ,withStyles} from '@material-ui/core/styles';
import {AppBar,Grid,Paper,Button,DialogActions,Dialog,DialogContent,DialogContentText,DialogTitle ,Toolbar,Typography,Accordion,AccordionDetails,AccordionSummary,InputBase,Badge,IconButton,NativeSelect,Select,MenuItem,FormControl,Menu,InputLabel,} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Location from '@material-ui/icons/LocationCity';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Draggable from 'react-draggable';
import {Link} from 'react-router-dom';
import history from '../history'


function PaperComponent(props) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }



const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: 0,
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  margin: {
    margin: 0,
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    display:"flex",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '50%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    
    cursor:"pointer",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width:"100%"
  },
  inputInput: {
    color:"black",
    fontSize:"15px",
    fontWeight:500,
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
  paper: {
    padding: theme.spacing(.3),
  
    color: theme.palette.text.secondary,
  },
}));

function PrimarySearchAppBar(props) {



    const categoryname = ({allitems})=>{

if(allitems){


  const aa =  allitems.filter((e,index)=>{
      return (
        index < 9
      )
    })

  return (
  
   aa.map((itm)=>{
     return(
      
     <a role="button" style={{color:"white",fontSize:"13px",fontWeight:"500",color:"#a3a9af",textTransform:"none",marginLeft:"5px",marginTop:"2px"}} class="btn btn-sm">{itm.category}</a>
    
     )
     })

  )
}


  
    }

 


    const getdropmenu = ({allitems})=>{


      if(allitems){
        return (
        
          allitems.map((itm)=>{
            return(
            <Link className="dropdown-item" href="#">{itm.category}</Link>
            
            ) }

        ))
      
        

        }}





















    const [open, setOpen] = React.useState(false);
    
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
 
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );


  return (
    <div className={classes.grow}>
      <AppBar style={{background:"#131921"}} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          
           <img src="../images/amozon.png" style={{width:"6%"}} alt="nii" srcset=""/>
         
          <div style={{backgroundColor:"white",position:"relative"}} className={classes.search}>
        
          <FormControl className={classes.margin}>
        
          <div className="dropdown">
  <button style={{background:"#dadada"}} className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    All
  </button>
  <div className="dropdown-menu" style={{height:"300px",overflowY:"scroll"}} aria-labelledby="dropdownMenuButton">
   
    {getdropmenu(props)}
  </div>
</div>
      </FormControl>

            <div style={{cursor:"pointer",background:"#F3A847",borderRadius:"3px",position:"absolute",right:"0%",height:"100%",padding:"0px 9px",display:"flex",alignItems:"center",justifyContent:"center"}} classNameName={classes.searchIcon}>
           
   
              <SearchIcon />
            </div>
            <InputBase
              
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div style={{position:"relative",marginTop:"-4.6%",background:"#232F3E"}} className="over">
      
      <Accordion style={{position:"absolute",background:"transparent",width:"200px",zIndex:"99999999999"}}>
            <AccordionSummary
           
              expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{color:"white",fontSize:"10px"}} className={classes.heading}>Hello,Sign in <br /> <span style={{fontSize:"14px"}}>Account & Lists</span> </Typography>
            </AccordionSummary>
            <AccordionDetails style={{background:"white"}}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
      </div>
      
    
          <div className={classes.grow} />


          <div className={classes.sectionDesktop}>


              
       
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton style={{marginRight:"20px"}}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton 
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>

          <IconButton aria-label="cart">
           <h5 style={{color:"white",marginRight:"8px"}}>Cart</h5>
      <StyledBadge style={{color:"white"}} badgeContent={4} color="secondary">
        <ShoppingCartIcon  />
      </StyledBadge>
    </IconButton>



          
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <Grid style={{background:"#232f3e"}} item xs={12}>
     
     <Paper style={{background:"#232F3E",padding:"1px 20px",display:"flex"}} className={classes.paper}>
        <Location style={{color:"white",marginTop:"5px"}} />
        
        <Button style={{color:"white"}} variant="non-outlined" size="small" color="primary" onClick={handleClickOpen}>
       Select your Address
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
      {/* <Button className="selected_button" style={{color:"white",fontSize:"12px",fontWeight:"500",color:"#a3a9af",textTransform:"none"}}  size="small" color="primary">
    Today Deals
      </Button> */}

     {categoryname(props)}
    
      <Button className="selected_button" style={{color:"white",fontSize:"12px",fontWeight:"500",color:"#a3a9af",textTransform:"none",marginLeft:"30px",position:"absolute",right:"2%"}}  size="small" color="primary">
        <img src="../images/applogo.png" style={{width:"30px",marginTop:"-4px"}} alt="" srcset=""/>
        
      <h6 style={{marginTop:"4px",marginLeft:"20px",color:"white"}}>Shoping Made Easy | Download the app</h6> 
     
      </Button>
     
        
          </Paper>
        </Grid>
     
    </div>
   
  );
}




export default PrimarySearchAppBar
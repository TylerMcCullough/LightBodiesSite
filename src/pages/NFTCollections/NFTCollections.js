import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
  },
  tab: {
    color: 'gray',
    '&.MuiTab-root': {
      color: 'gray',
      fontFamily: "Amulet"
    },
    '&.Mui-selected': {
      color: 'white'
    }
  },
  content: {
    '& .MuiBox-root': {
      padding: "0"
    }
  }
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const NFTCollections = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const tabClasses = {root: classes.tab};

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', padding:"1rem 0" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          centered
          disableRipple={true}
          textColor="inherit" 
          indicatorColor="inherit"
          // sx={{ color:"white" }}
        >
          <Tab classes={tabClasses} label="Mercenary" {...a11yProps(0)} />
          <Tab classes={tabClasses} label="Monarch" {...a11yProps(1)} />
          <Tab classes={tabClasses} label="Diviner" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel className={classes.content} value={value} index={0}>
        <iframe 
          title='Mercenary'
          src='https://opensea.io/collection/lightbodiesmercenary?embed=true'
          width='100%'
          height="100%"
          frameborder='0'
          allowfullscreen
          style={{minHeight:"89vh", marginTop:"0", paddingTop:"0"}}
        >
        </iframe>
      </TabPanel>
      <TabPanel className={classes.content} value={value} index={1}>
        <iframe 
          title='Monarch'
          src='https://opensea.io/collection/lightbodiesmonarch?embed=true'
          width='100%'
          height="100%"
          frameborder='0'
          allowfullscreen
          style={{minHeight:"89vh", marginTop:"0", paddingTop:"0"}}
        >
        </iframe>
      </TabPanel>
      <TabPanel className={classes.content}  value={value} index={2}>
        <iframe 
          title='Diviner'
          src='https://opensea.io/collection/lightbodiesdiviner?embed=true'
          width='100%'
          height="100%"
          frameborder='0'
          allowfullscreen
          style={{minHeight:"89vh", marginTop:"0", paddingTop:"0"}}
        >
        </iframe>
      </TabPanel>
    </Box>
  );
}

export default NFTCollections
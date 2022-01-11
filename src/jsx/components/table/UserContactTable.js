import React, { Fragment, useEffect, useState } from "react";
import PageTitle from "../../layouts/PageTitle";
import BasicDatatable from "./BasicDatatable";
import SimpleDataTable from "./SimpleDataTable";
import ProfileDatatable from "./ProfileDatatable";
import FeesCollection from "./FeesCollection";
import PatientTable from "./PatientTable";
import { createTheme, ThemeProvider,  } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import CircularProgress from '@mui/material/CircularProgress';
import { RiContactsFill } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import { connect } from "react-redux";

const UserContactTable = (props) => {

   const [userList, setUserList] = useState([]);
   const [contactList, setContactList] = useState([]);
   const [toggleComp, setToggleComp] = useState(true);
   const [userId, setUserId] = useState();
   
   const [circularProgress, setCircularProgress] = useState(false);

   const getUserList = async () => {
      setCircularProgress(true)
      try {
         const response = await fetch("http://3.135.51.200/api/v1/user/userBasicDetails", {
            method: "GET",
            headers: {
               "Content-Type": "application/json",
               "Authorization": `Bearer: ${props.jwtToken}`,
            },
         });
         const data = await response.json()
         console.log(data)
         setUserList(data.result.data);
         setCircularProgress(false)
      } catch (error) {
         console.log(error);
         setCircularProgress(false)
      }
   }
   const getContactList = async () => {
      setCircularProgress(true);
      try {
         const response = await fetch("http://3.135.51.200/api/v1/user/userContact/"+userId, {
            method: "GET",
            headers: {
               "Content-Type": "application/json",
               "Authorization": `Bearer: ${props.jwtToken}`,
            },
         });
         const data = await response.json()
         console.log(data)
         setContactList(data.data.data);
         setCircularProgress(false);
      } catch (error) {
         console.log(error);
         setCircularProgress(false)
      }
   }
   
   useEffect(() => {
      getUserList()
   }, []);
   useEffect(() => {
      if(!toggleComp)
         getContactList()
   }, [toggleComp]);

   const userColumns = [
      {
         name: "user_id",
         label: "User Id",
         options: {
            filter: true,
            sort: true,
         }
      },
      {
         name: "name",
         label: "Name",
         options: {
            filter: true,
            sort: true,
         }
      },
      {
         name: "mobile",
         label: "Mobile No",
         options: {
            filter: true,
            sort: true,
         }
      },
      {
         name: "application_id",
         label: "Application Id",
         options: {
            filter: true,
            sort: true,
         }
      },
      {
         name: "application_install",
         label: "App Installed",
         options: {
            filter: true,
            sort: true,
         }
      },
      {
         name: "user_id",
         label: "Action",
         options: {
            customBodyRender: (value, tableMeta, updateValue) =>{
                return (
                    <button onClick={() => {setUserId(value); setToggleComp(!toggleComp)}} type="button" className="btn" style={{backgroundColor:"#6CC51D", color:"white", padding:"10px"}}>
                        <RiContactsFill size="1.4em" />
                    </button>
                )
            }
         }
      },
   ]
   const contactColumns = [
      {
         name: "user",
         label: "User",
         options: {
            filter: true,
            sort: true,
         }
      },{
         name: "name",
         label: "Name",
         options: {
            filter: true,
            sort: true,
         }
      },{
         name: "number",
         label: "Number",
         options: {
            filter: true,
            sort: true,
         }
      },
   ]

   const options = {
      filter: false,
      responsive: 'scroll',
      elevation: 0,
      selectableRowsHeader: false,
      selectableRows: 'none',
      textLabels:{
          pagination: {
              next: "Next Page",
              previous: "Previous Page",
              rowsPerPage: "Rows per page:",
              displayRows: "of",
          },
      }
  };

  const getMuiTheme = () => createTheme({
      overrides: {
         MUIDataTable: {
            root: {
               backgroundColor: "#000",
            },
            paper:{
               border:"1px solid #dee2e6",
               borderRadius: 0,
               width: '100%', 
               overflow: 'hidden',
               margin: "0 auto"
            }
         },
         MUIDataTableHeadCell: {
            fixedHeader: {
               zIndex: 2
            }
         }
      }
   });

   return (
      <Fragment>
         {/* <PageTitle activeMenu="Datatable" motherMenu="Table" /> */}
         <div className="row">
            {
               toggleComp
               ?  <ThemeProvider theme={getMuiTheme()}>
                     <MUIDataTable data={userList} columns={userColumns} options={options}  />
                  </ThemeProvider>
               :  <div style={{width:"100%"}}>
                     <BiArrowBack onClick={() => {setToggleComp(!toggleComp)}} size="2em" style={{color:"#6CC51D", marginBottom:"1em", cursor:"pointer"}} />
                     <ThemeProvider theme={getMuiTheme()}>
                        <MUIDataTable data={contactList} columns={contactColumns} options={options}  />
                     </ThemeProvider>
                  </div>
            }
            <Dialog
               open={circularProgress}
               aria-labelledby="alert-dialog-title"
               aria-describedby="alert-dialog-description"
               PaperProps={{
                  style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                  },
               }}
            >
               <Box sx={{padding:1, background:"transparent", display:"flex"}}>
                  {/* <Typography gutterBottom variant="h5" component="div" sx={{color:"white"}}>
                        Approving...
                  </Typography> */}
                  <CircularProgress sx={{color:"white", margin:"0 auto "}} /> 
               </Box>     
            </Dialog>
            {/* <BasicDatatable></BasicDatatable> */}
            {/* <SimpleDataTable></SimpleDataTable>
            <ProfileDatatable></ProfileDatatable>
            <FeesCollection></FeesCollection>
            <PatientTable></PatientTable> */}
         </div>
      </Fragment>
   );
};

const mapStateToProps = (state) => {
   return {
       jwtToken: state.auth.auth.token,
   };
 };

export default connect(mapStateToProps)(UserContactTable);

import React, { Fragment, useEffect, useState } from "react";
import { createTheme, ThemeProvider,  } from '@material-ui/core/styles';
import PageTitle from "../../layouts/PageTitle";
import BasicDatatable from "./BasicDatatable";
import SimpleDataTable from "./SimpleDataTable";
import ProfileDatatable from "./ProfileDatatable";
import FeesCollection from "./FeesCollection";
import PatientTable from "./PatientTable";
import { getRequest } from "../../../Request/Request";
import MUIDataTable from "mui-datatables";
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import CircularProgress from '@mui/material/CircularProgress';
import { connect } from "react-redux";

const UserDetailTable = (props) => {

   const [userList, setUserList] = useState([]);
   
   const [circularProgress, setCircularProgress] = useState(false);

   const getUserList = async () => {
      // debugger
      // const res = await getRequest("/userBasicDetails")
      // console.log(res);
      setCircularProgress(true);
      try {
         const response = await fetch("http://3.135.51.200/api/v1/user/userBasicDetails", {
            method: "GET",
            // mode: "*cors",
            headers: {
               "Authorization": `Bearer: ${props.jwtToken}`,
               "Content-Type": "application/json"
            },
            // body: JSON.stringify(data)
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
   useEffect(() => {
      getUserList()
   }, [])

   const coalUserColumns = [
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
          name: "type_of_loan",
          label: "Loan Type",
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
               overflow: 'hidden'
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
            <ThemeProvider theme={getMuiTheme()}>
               <MUIDataTable data={userList} columns={coalUserColumns} options={options}  />
            </ThemeProvider>
            {/* <BasicDatatable></BasicDatatable> */}
            {/* <SimpleDataTable></SimpleDataTable>
            <ProfileDatatable></ProfileDatatable>
            <FeesCollection></FeesCollection>
            <PatientTable></PatientTable> */}
         </div>
         
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
      </Fragment>
   );
};

const mapStateToProps = (state) => {
   return {
       jwtToken: state.auth.auth.token,
   };
 };

export default connect(mapStateToProps)(UserDetailTable);

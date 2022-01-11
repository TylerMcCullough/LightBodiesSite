import React, { Fragment, useEffect, useState } from "react";
import { createTheme, ThemeProvider,  } from '@material-ui/core/styles';
import PageTitle from "../../layouts/PageTitle";
import BasicDatatable from "./BasicDatatable";
import SimpleDataTable from "./SimpleDataTable";
import ProfileDatatable from "./ProfileDatatable";
import FeesCollection from "./FeesCollection";
import PatientTable from "./PatientTable";
import MUIDataTable from "mui-datatables";
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import { TiLocation } from "react-icons/ti";
import { IoLocationSharp } from "react-icons/io5";
import { BiArrowBack } from "react-icons/bi";

import GoogleMapReact from 'google-map-react'
import { connect } from "react-redux";

const UserLocationTable = (props) => {

   const [userList, setUserList] = useState([]);
   const [locationList, setLocationList] = useState([]);
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
         setCircularProgress(false);
      }
   }
   const getLocationList = async () => {
      setCircularProgress(true);
      try {
         const response = await fetch("http://3.135.51.200/api/v1/user/userLocations/"+userId, {
            method: "GET",
            headers: {
               "Content-Type": "application/json",
               "Authorization": `Bearer: ${props.jwtToken}`,
            },
         });
         const data = await response.json();
         console.log(data);
         setLocationList(data.data.data);
         setCircularProgress(false)
      } catch (error) {
         console.log(error);
         setCircularProgress(false)
      }
   }
   function formatDate(date) {
      var d = new Date(date),
         month = '' + (d.getMonth() + 1),
         day = '' + d.getDate(),
         year = d.getFullYear();

      if (month.length < 2) 
         month = '0' + month;
      if (day.length < 2) 
         day = '0' + day;

      var newDate = day+"-"+month+"-"+year;

      return newDate;
   }
   function formatAMPMTime(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
   }


   useEffect(() => {
      getUserList()
   }, []);
   useEffect(() => {
      if(!toggleComp)
         getLocationList()
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
                        <TiLocation size="1.5em" />
                    </button>
                )
            }
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
            {
               toggleComp
               ?  <ThemeProvider theme={getMuiTheme()}>
                     <MUIDataTable data={userList} columns={userColumns} options={options}  />
                  </ThemeProvider>
               :  <div style={{width:"100%"}}>
                     <BiArrowBack onClick={() => {setToggleComp(!toggleComp)}} size="2em" style={{color:"#6CC51D", marginBottom:"1em", cursor:"pointer"}} />
                     <div style={{ height: '100vh', width: '100%' }}>
                        <GoogleMapReact
                           bootstrapURLKeys={{ key: 'AIzaSyAcYympF0gNPht-ap0BqVqc7o_6wPAEtd8' }}
                           defaultCenter={{ lat: 23.00, lng: 87.00 }}
                           defaultZoom={5}
                        >
                           {
                              locationList.map(data => {
                                 return (
                                    <div lat={data.coordinates[0]} lng={data.coordinates[1]} >
                                       <IoLocationSharp size="1.5em" style={{color:"#de3000"}} />
                                       <div style={{marginTop:"5px", whiteSpace:"nowrap", color:"black", fontWeight:"800"}}>
                                          { formatDate(new Date(data.date_time)) }
                                          <div style={{marginTop:"5px",fontSize:"12px"}}>{ formatAMPMTime(new Date(data.date_time)) }</div>   
                                       </div>
                                    </div>
                                 )
                              })
                           }
                           {/* <div lat={24} lng={88} >
                              <IoLocationSharp size="1.5em" style={{color:"#de3000"}} />
                              <div style={{marginTop:"5px", whiteSpace:"nowrap", color:"black", fontWeight:"800"}}>
                                 { formatDate(new Date("2021-06-19T09:00:00.000Z")) }
                                 <div style={{marginTop:"5px",fontSize:"12px"}}>{ formatAMPMTime(new Date("2021-06-19T09:00:00.000Z")) }</div>   
                              </div>
                           </div> */}
                        </GoogleMapReact>
                     </div>
                     
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

export default connect(mapStateToProps)(UserLocationTable)


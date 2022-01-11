import React, { Fragment, useEffect, useState } from "react";
import { createTheme, ThemeProvider,  } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import CircularProgress from '@mui/material/CircularProgress';
import { RiMessage3Fill } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import { connect } from "react-redux";

const UserMessageTable = (props) => {

    const [userList, setUserList] = useState([]);
    const [messageList, setMessageList] = useState([]);
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
            setCircularProgress(false);
        } catch (error) {
            console.log(error);
            setCircularProgress(false);
        }
    }
    const getMessageList = async () => {
        setCircularProgress(true)
        try {
           const response = await fetch("http://3.135.51.200/api/v1/user/userMessage/"+userId, {
              method: "GET",
              headers: {
                 "Content-Type": "application/json",
                 "Authorization": `Bearer: ${props.jwtToken}`,
              },
           });
           const data = await response.json()
           console.log(data)
           setMessageList(data.data.data);
           setCircularProgress(false)
        } catch (error) {
           console.log(error);
           setCircularProgress(false);
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
    }, [])
    useEffect(() => {
        if(!toggleComp)
           getMessageList()
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
                            <RiMessage3Fill size="1.5em" />
                        </button>
                    )
                }
            }
        },
    ]
    const messageColumns = [
        {
            name: "user",
            label: "User",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "tital",
            label: "Sender Name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "sender",
            label: "Sender No",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "date_time",
            label: "Date & Time",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) =>{
                    return (
                        <span style={{whiteSpace:"nowrap"}} >
                            { formatDate(new Date(value)) }
                            <div style={{marginTop:"5px",fontSize:"12px"}}>{ formatAMPMTime(new Date(value)) }</div>
                        </span>
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
            <div className="row">
            {
               toggleComp
               ?  <ThemeProvider theme={getMuiTheme()}>
                     <MUIDataTable data={userList} columns={userColumns} options={options}  />
                  </ThemeProvider>
               :  <div style={{width:"100%"}}>
                     <BiArrowBack onClick={() => {setToggleComp(!toggleComp)}} size="2em" style={{color:"#6CC51D", marginBottom:"1em", cursor:"pointer"}} />
                     <ThemeProvider theme={getMuiTheme()}>
                        <MUIDataTable data={messageList} columns={messageColumns} options={options}  />
                     </ThemeProvider>
                  </div>
            }
            <Dialog
                open={circularProgress}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                BackdropProps={{
                    classes: {
                        root: {
                            backgroundColor:'black'
                        }
                    },
                }}
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
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        jwtToken: state.auth.auth.token,
    };
  };
 
 export default connect(mapStateToProps)(UserMessageTable);
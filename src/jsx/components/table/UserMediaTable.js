import React, { Fragment, useEffect, useState } from "react";
import { createTheme, ThemeProvider,  } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import CircularProgress from '@mui/material/CircularProgress';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import MUIDataTable from "mui-datatables";
import { MdPermMedia } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { connect } from "react-redux";

const UserMediaTable = (props) => {

    const [userList, setUserList] = useState([]);
    const [mediaList, setMediaList] = useState([]);
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
    const getMediaList = async () => {
        setCircularProgress(true);
        try {
           const response = await fetch("http://3.135.51.200/api/v1/user/userMedia/"+userId, {
              method: "GET",
              headers: {
                 "Content-Type": "application/json",
                 "Authorization": `Bearer: ${props.jwtToken}`,
              },
           });
           const data = await response.json()
           console.log(data);
           var media = [];
           data.data.data.forEach(element => {
               media = [...media, ...element.media]
           });
           setMediaList(media);
           setCircularProgress(false);
        } catch (error) {
           console.log(error);
           setCircularProgress(false);
        }
    }

    useEffect(() => {
        getUserList()
    }, []);
    useEffect(() => {
        if(!toggleComp)
            getMediaList()
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
                            <MdPermMedia size="1.5em" />
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
            <div className="row">
                {
                toggleComp
                ?  <ThemeProvider theme={getMuiTheme()}>
                        <MUIDataTable data={userList} columns={userColumns} options={options}  />
                    </ThemeProvider>
                :  <div style={{width:"100%"}}>
                        <BiArrowBack onClick={() => {setToggleComp(!toggleComp)}} size="2em" style={{color:"#6CC51D", marginBottom:"1em", cursor:"pointer"}} />
                        <Paper elevation={3} sx={{padding:"1em", marginTop:"0"}} >
                            <Grid  container justifyContent="center" spacing={2}>
                                {mediaList.map((value) => (
                                    <Grid key={value} md={4} sm={6} xs={12} item>
                                        <Card sx={{ maxWidth: 345, margin:"0 auto" }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    image={"http://3.135.51.200/media/"+value}
                                                    alt={value}
                                                />
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Paper>
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
            </div>
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        jwtToken: state.auth.auth.token,
    };
  };
 
 export default connect(mapStateToProps)(UserMediaTable);
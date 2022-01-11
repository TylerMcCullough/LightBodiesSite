import axios from "axios"

export const Request = async (path, data, method, headers) => {
    // debugger
    // if(wj_cancel && resp && resp.config && resp.config.url == `${process.env.REACT_APP_API_URL}/${path}`){
    //         wj_cancel && wj_cancel(); 
    // }
    try {

        var options = {
            method: method,
            url: `http://3.135.51.200/api/v1/user${path}`,
            headers: {
                "Content-Type": "application/json",
                // "Authorization":"key@123",
                ...headers
            },
            dataType: 'json',
            // cancelToken: new CancelToken(function executor(c) {            
            //     wj_cancel = c;
            // })
        };
        // if(localStorage.getItem("mpWebStatus") || localStorage.getItem("mpAdminStatus")){
        //     options.headers["Authorization"] = localStorage.getItem("jwtToken");
        // }else{
        //     options.headers["Authorization"] = "key@123";
        // }
        if (method === "GET") {
            options["params"] = data;
        }
        else {
            options["data"] = data;
        }
        let response = await axios(options);
        console.log("response----", response);
        // return response
    } catch (error) {
        console.log(error.response);
    }
    // return result;
}


export const postRequest = (path, data, headers = {}) => Request(path, data, "POST", headers)
export const putRequest = (path, data) => Request(path, data, "PUT")
export const getRequest = (path, data) => Request(path, data, "GET")
export const deleteRequest = (path, data) => Request(path, data, "DELETE")
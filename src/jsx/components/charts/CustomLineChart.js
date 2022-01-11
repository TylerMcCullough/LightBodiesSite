import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";

const CustomLineChart = (props) => {

    const [chartData, setChartData] = useState([]);

    const getChartData = async () => {
        try {
            const response = await fetch("http://3.135.51.200"+props.path, {
                method: "GET",
                // mode: "*cors",
                headers: {
                    "Authorization": `Bearer: ${props.jwtToken}`,
                    "Content-Type": "application/json"
                },
            });
            const data = await response.json();
            const n = data.data.aggregate.length-1;
            const filterData = new Array(n).fill(0);
            data.data.aggregate.forEach(element => {
                const tempStr = "2022-"+element.month+"-03"
                const startDate = new Date(tempStr);
                const yData = startDate.toLocaleString('default', { month: 'short' }) + ", " + startDate.getFullYear();
                filterData[element.month-1] = { x:yData, y:element.numOfData };
            });
           setChartData(filterData);
        } catch (error) {
           console.log(error);
        }
     }
    

    useEffect(() => {
        getChartData()
    }, [])

    const series = [
        {
           name: "Data",
           data: chartData,
        },
     ]

    const options = {
        chart: {
            height: 350,
            type: "area",
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },

        stroke: {
            width: [4],
            colors: ["#1EA7C5"],
            curve: "straight",
        },
        legend: {
            show: false,
            position: "top",
            horizontalAlign: "left",
        },
        colors: ["#1EA7C5"],
        xaxis: {
            type: "text",
        },
        markers: {
            size: [8],
            strokeWidth: [0],
            strokeColors: ["#1EA7C5"],
            border: 0,
            colors: ["#1EA7C5"],
            hover: {
                size: 10,
            },
        },
        yaxis: {
            title: {
                text: "",
            },
        },
    }

    return (
        <div id="chart">
            <ReactApexChart
               options={options}
               series={series}
               type="area"
               height={250}
            />
         </div>
    )
}

const mapStateToProps = (state) => {
    return {
        jwtToken: state.auth.auth.token,
    };
  };
 
 export default connect(mapStateToProps)(CustomLineChart)

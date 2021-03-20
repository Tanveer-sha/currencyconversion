import React from 'react';
import {Line} from 'react-chartjs-2';


const Charts=(props)=>{
const date=props.data&&Object.keys(props.data);
const values=props.data&&Object.values(props.data);
    const Chartdata = {
        labels:date,
        datasets: [
          {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data:values
          }
        ]
      }

    return(
        <div>
        <Line
          data={Chartdata}
          options={{
            title:{
              display:true,
              text:'Last 60 Days Trend',
              fontSize:20
            },
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
      </div>
    )
}

export default Charts;
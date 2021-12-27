import React from "react";
import Chart from "react-google-charts";

function OrdersChart(props){
    const {data} = props
    const chartData=[
      ['No. of Orders','Customer Count']
    ]
    for(const key in data){
      chartData.push([key,data[key]])
    }

    return(
      <div className="col-md-6">
        <Chart  
          width={'550px'}
          height={'350px'}
          chartType='PieChart'
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={{title:'Order Distribution',is3D:true}}
          rootProps={{'data-testid':'2'}}
        />
      </div>
    )
}

export default OrdersChart;

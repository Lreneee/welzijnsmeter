import react from "react";
import {Line} from "react-chartjs-2";

const LineChart = (props) => {
    const labels = ['Nu', 'Straks', 'Later'];
    const data = {
        labels: labels,
        datasets: [{
            label: props.title,
            data: [props.nu, props.straks, props.later],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };
    return(
        <div id="chart container" className="m-auto">
            <Line data={data}/>
        </div>
    )
}
export default LineChart;

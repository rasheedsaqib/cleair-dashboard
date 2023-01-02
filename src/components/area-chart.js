import React, {useEffect, useState} from "react";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";
import moment from "moment";

const Chart = ({feed}) => {
    const [state, setState] = useState({
        series: [{
            data: feed.map((item) => {
                return [item.created_at, item.field1]
            })
        }],
        options: {
            chart: {
                id: 'area-datetime',
                type: 'area',
                height: 350,
                zoom: {
                    autoScaleYaxis: true
                }
            },
            annotations: {
                yaxis: [{
                    y: 30,
                    borderColor: '#999',
                    label: {
                        show: true,
                        text: 'Support',
                        style: {
                            color: "#fff",
                            background: '#00E396'
                        }
                    }
                }]
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 0,
                style: 'hollow',
            },
            xaxis: {
                type: 'datetime',
                min: new Date('01 Mar 2012').getTime(),
                tickAmount: 6,
            },
            tooltip: {
                x: {
                    format: 'dd MMM yyyy'
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0, 100]
                }
            },
        },
        selection: 'one_day',
    });

    useEffect(() => {
        ApexCharts.exec(
            'area-datetime',
            'zoomX',
            moment().subtract(5, 'days').toDate().getTime(),
            moment().toDate().getTime()
        )
    })

    if (typeof window === 'undefined') {
        return null;
    }

    return (
        <div id="chart">
            <div id="chart-timeline">
                <ReactApexChart options={state.options} series={state.series} type="area" height={350}/>
            </div>
        </div>
    );
}

export default Chart;

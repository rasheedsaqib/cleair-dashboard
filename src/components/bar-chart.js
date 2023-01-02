import React from "react";
import ReactApexChart from "react-apexcharts";
import moment from "moment";

// class BarChart extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             options: {
//                 plotOptions: {
//                     bar: {
//                         dataLabels: {
//                             position: "top" // top, center, bottom
//                         }
//                     }
//                 },
//                 dataLabels: {
//                     enabled: true,
//                     offsetY: -20,
//                     style: {
//                         fontSize: "12px",
//                         colors: ["#304758"]
//                     }
//                 },
//                 xaxis: {
//                     categories: [
//                         "Juin 2018",
//                         "Juin 2018",
//                         "Juin 2018",
//                         "Juin 2018",
//                         "Juin 2018",
//                         "Juin 2018"
//                     ],
//                     position: "bottom",
//                     labels: {
//                         offsetY: 0
//                     },
//                     axisBorder: {
//                         show: false
//                     },
//                     axisTicks: {
//                         show: false
//                     },
//                     crosshairs_: {
//                         fill: {
//                             type: "gradient",
//                             gradient: {
//                                 colorFrom: "#D8E3F0",
//                                 colorTo: "#BED1E6",
//                                 stops: [0, 100],
//                                 opacityFrom: 0.4,
//                                 opacityTo: 0.5
//                             }
//                         }
//                     },
//                     tooltip: {
//                         enabled: false,
//                         offsetY: -35
//                     }
//                 },
//                 fill: {
//                     gradient: {
//                         shade: "light",
//                         type: "horizontal",
//                         shadeIntensity: 0.25,
//                         gradientToColors: undefined,
//                         inverseColors: true,
//                         opacityFrom: 1,
//                         opacityTo: 1,
//                         stops: [50, 0, 100, 100]
//                     }
//                 },
//                 yaxis: {
//                     axisBorder: {
//                         show: false
//                     },
//                     axisTicks: {
//                         show: false
//                     },
//                     labels: {
//                         show: false,
//                         formatter: function(val) {
//                             return Number(val).toLocaleString() + "€";
//                         }
//                     }
//                 },
//                 title: {
//                     text: "Revenus des 12 derniers mois",
//                     floating: true,
//                     offsetY: 0,
//                     align: "center",
//                     style: {
//                         color: "#444"
//                     }
//                 },
//                 chart: {
//                     animations: {
//                         enabled: false
//                     }
//                 }
//             },
//             series: [
//                 {
//                     name: "Chiffre d'affaires",
//                     data: [8976, 12987, 9853, 10986, 3571]
//                 }
//             ]
//         };
//
//         setTimeout(() => {
//             this.setState({
//                 series: [
//                     {
//                         name: "Chiffre d'affaires",
//                         data: [8976, 12987, 9853, 67, 3571]
//                     }
//                 ]
//             });
//         }, 4000);
//     }
//
//     render() {
//         return (
//             <div id="chart">
//                 {typeof window !== "undefined" && (
//                     <ReactApexChart
//                         options={this.state.options}
//                         series={this.state.series}
//                         type="bar"
//                         height="300"
//                     />
//                 )}
//             </div>
//         );
//     }
// }

const Chart = ({feed}) => {
    const mapped = feed.map((item) => ({
        ...item,
        created_at: moment(item.created_at).format("DD MMM YYYY")
    }))

    const day1 = mapped.filter((item) => item.created_at === moment().subtract(4, "days").format("DD MMM YYYY"))
    const day2 = mapped.filter((item) => item.created_at === moment().subtract(3, "days").format("DD MMM YYYY"))
    const day3 = mapped.filter((item) => item.created_at === moment().subtract(2, "days").format("DD MMM YYYY"))
    const day4 = mapped.filter((item) => item.created_at === moment().subtract(1, "days").format("DD MMM YYYY"))
    const day5 = mapped.filter((item) => item.created_at === moment().format("DD MMM YYYY"))

    const [state, setState] = React.useState({
        options: {
            plotOptions: {
                bar: {
                    dataLabels: {
                        position: "top" // top, center, bottom
                    }
                }
            },
            dataLabels: {
                enabled: true,
                offsetY: -20,
                style: {
                    fontSize: "12px",
                    colors: ["#304758"]
                }
            },
            xaxis: {
                categories: [
                    moment().subtract(4, "days").format("DD MMM YYYY"),
                    moment().subtract(3, "days").format("DD MMM YYYY"),
                    moment().subtract(2, "days").format("DD MMM YYYY"),
                    moment().subtract(1, "days").format("DD MMM YYYY"),
                    moment().format("DD MMM YYYY")
                ],
                position: "bottom",
                labels: {
                    offsetY: 0
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs_: {
                    fill: {
                        type: "gradient",
                        gradient: {
                            colorFrom: "#D8E3F0",
                            colorTo: "#BED1E6",
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5
                        }
                    }
                },
                tooltip: {
                    enabled: false,
                    offsetY: -35
                }
            },
            fill: {
                gradient: {
                    shade: "light",
                    type: "horizontal",
                    shadeIntensity: 0.25,
                    gradientToColors: undefined,
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [50, 0, 100, 100]
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false,
                }
            },
            chart: {
                animations: {
                    enabled: false
                }
            }
        },
        series: [
            {
                data: [day1.length, day2.length, day3.length, day4.length, day5.length]
            }
        ]
    })

    if (typeof window === "undefined") {
        return null;
    }
    return (
        <div id="chart">
            {typeof window !== "undefined" && (
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    height="300"
                />
            )}
        </div>
    );
}

export default Chart;

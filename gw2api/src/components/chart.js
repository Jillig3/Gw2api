import Chart from "react-google-charts";

const Linechart = (props) =>{
    const cells = props.data;
    let dataItems = [];

    if(cells) {
        dataItems.push(['Date', 'Sales']);
        cells.forEach((cell) => {
            dataItems.push(cell);
        });
    } else {
        return(
            <div>Loading</div>
        )
    }
    
    return(
        <div>
            <Chart
                width="100%"
                height="400px"
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={dataItems}
                options={{
                    legend: {
                        position: 'none'
                    },
                    colors: ['#89E9F4'],
                    backgroundColor: '#1B1C31',
                    lineWidth: '3',
                    vAxis: {
                        gridlines: {
                            color: 'transparent'
                        },
                        title: 'Gold',
                        titleTextStyle: {
                            color: '#fff'
                        },
                        textStyle: {
                            color: '#A7A7B0'
                        }
                    },
                    hAxis: {
                        title: 'Date',
                        titleTextStyle: {
                            color: '#fff'
                        },
                        textStyle: {
                            color: '#A7A7B0'
                        },
                        minorGridlines: {
                            color: 'transparent'
                        },
                        gridlines: {
                            color: '#41415c',
                            minSpacing: 40
                        }
                    }
                }}
            />
        </div>
    )
}

export default Linechart
import Chart from "react-google-charts";

const Linechart = () =>{
    return(
        <div>
            <Chart
                width={400}
                height={300}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                [
                    { type: 'number', label: 'x' },
                    { type: 'number', label: 'values' },
                ],
                [1, 100],
                [2, 120],
                [3, 130],
                [4, 90],
                [5, 70],
                [6, 30],
                [7, 80],
                [8, 100],
                ]}
                options={{
                legend: 'none',
            }}
            />
        </div>
    )
}

export default Linechart
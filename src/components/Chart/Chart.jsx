import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Line, Bar } from 'react-chartjs-2'
import style from './Chart.module.css'
const Chart = ({data: {confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([])
    console.log(country)
    console.log(confirmed, recovered, deaths)
    useEffect(() => {
        async function fetchDailyData(){
            const url = 'https://covid19.mathdro.id/api/daily'
            const response = await axios.get(url)
            setDailyData(response.data)
        }
        fetchDailyData()
    }, [])
    // console.log(dailyData)
    const lineChart = (
        <Line 
            data={{
                labels: dailyData.map(val => val.reportDate),
                datasets: [{
                    data: dailyData.map(val => val.confirmed.total),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                }, {
                    data: dailyData.map(val => val.deaths.total),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true
                }],
            }}
        
        />
    )
    const barChart = (
        confirmed && recovered && deaths ? (
        <Bar 
            data={{
                labels: ['Infectsed', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        'rgba(0, 0, 255, 0.5)',
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(255, 0, 0, 0.5)',
                    ],
                    data:  [confirmed.value, recovered.value, deaths.value]
                }]
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country}`}
            }}
        
        
        
        
        />)  : null
    ) 
    return (
        <div className={style.container}>
           {country ? barChart : lineChart}
        </div>
    )
}

export default Chart

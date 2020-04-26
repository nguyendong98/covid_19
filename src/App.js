import React, {useEffect, useState} from 'react'
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import style from './App.module.css'
import axios from 'axios'
import covidImage from './img/covid.png'

const App = () => {
    const [data, setData] = useState({})
    const [country, setCountry] = useState('')
    useEffect(() => {
        async function fetchData() {
            try {
                const url = 'https://covid19.mathdro.id/api';
                const response = await axios.get(url)
                // const {confirmed, recovered, deaths, lastUpdate} = response
                const data = {
                    confirmed: response.data.confirmed,
                    recovered: response.data.recovered,
                    deaths: response.data.deaths,
                    lastUpdate: response.data.lastUpdate
                }
                setData(data)
                // console.log(response)
            } catch (error) {
               console.log(error.message) 
            }
        }
        fetchData()
    }, [])
    const handleControlChange =  async (country) => {
        if(country === 'global'){
            const response = await axios.get(`https://covid19.mathdro.id/api/`)
            const data = {
            confirmed: response.data.confirmed,
            recovered: response.data.recovered,
            deaths: response.data.deaths,
            lastUpdate: response.data.lastUpdate
            }
            setData(data)
            setCountry('')
            
        }
        else{
            const response = await axios.get(`https://covid19.mathdro.id/api/countries/${country}`)
            const data = {
            confirmed: response.data.confirmed,
            recovered: response.data.recovered,
            deaths: response.data.deaths,
            lastUpdate: response.data.lastUpdate
            }
            setData(data)
            setCountry(country)
        }
        
    }
    return (
        <div className={style.container}>
            <img src={covidImage}  alt="covidImage" className={style.covidImage}/>
            <Cards data={data}/>
            <CountryPicker handleControlChange={handleControlChange} />
            <Chart data={data} country={country} />

            
        </div>
    )
}



export default App

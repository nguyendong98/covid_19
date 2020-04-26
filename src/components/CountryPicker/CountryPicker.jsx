import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import style from './CountryPicker.module.css'
import axios from 'axios'
const CountryPicker = ({ handleControlChange }) => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        async function countries(){
            const url = 'https://covid19.mathdro.id/api/countries'
            const response = await axios.get(url)
            const { data } = response
            setCountries(data.countries)
        }
       countries()
    }, [])
    // console.log(countries)
    return (
        <FormControl className={style.formControl}>
            <NativeSelect onChange={e => handleControlChange(e.target.value)}>
                <option value="global">Global</option>
                {
                    countries ? countries.map((val, index) => {
                        return (
                            <option value={val.name} key={index} >{val.name}</option>
                        )
                    }) : null
                }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker

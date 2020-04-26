import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import style from './Cards.module.css'
import CountUp from 'react-countup';
import cx from 'classnames'
const Cards = ({data : {confirmed, lastUpdate, recovered, deaths}}) => {
    
    return !confirmed && !lastUpdate && !recovered && !deaths ? null : (
        <div className={style.container}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} md={3} className={cx(style.card, style.infected)}  component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varaint="h5">
                            <CountUp start={0}  end={confirmed.value} duration={2.5} separator="," />
                           
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} className={cx(style.card, style.recovered)}  component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varaint="h5">
                            <CountUp start={0}  end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Number of recovered from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} className={cx(style.card, style.deaths)}  component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Death</Typography>
                        <Typography varaint="h5">
                            <CountUp start={0}  end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Number of death caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards

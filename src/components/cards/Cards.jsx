import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import cardStyle from "./Cards.module.css";
import CountUp from "react-countup";


export default function Cards({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {

   

  if (!confirmed || !lastUpdate) {
    return "Loading...";
  }

  return (
    <div className={cardStyle.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3}  className={cardStyle.infected}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of active cases of covid19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cardStyle.recovered}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5"><CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              /></Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of Recovered cases of Covid19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cardStyle.deaths}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5"><CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              /></Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Numbers of deaths caused by Covid 19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import "./Card.css";
import Loading from "../Loading";

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <div className="container card">
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className="infected">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <h3>Infected</h3>
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              <h3>Number of active cases of COVID-19</h3>
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="recovered">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <h3>Recovered</h3>
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              <h3>Number of deaths caused by COVID-19</h3>
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className="death">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <h3>Deaths</h3>
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              <h3>Number of active cases of COVID-19</h3>
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;

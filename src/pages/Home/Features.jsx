import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import FeatureBox from "components/FeatureBox";
import Title from "components/Title";

export default function Features() {
  return (
    <div>
      <Paper elevation={10} className="Paper">
        <Title>Features</Title>
        <Grid container direction="row" justify="center" style={{ textAlign: "center"}}>
          <FeatureBox title="event planning" icon="calendar_today">
            Coinrizon believes that the future of cryptocurrency projects should
            be more face to face, and more human interaction. This is why we
            will help your project attend and get slots at the most important
            conferences/events. We can even come to the event if the need
            arises.
          </FeatureBox>
          <FeatureBox title="flexabillity" icon="attach_money">
            We believe in long term relationships and are opposed to
            overcharging clients. Our pricing is an offer basis, where we will
            provide a default pricing in USD and the price is highly flexible.
            We accept partial token/equity payments as well.
          </FeatureBox>
          <FeatureBox title="network" icon="group">
            The people behind Coinrizon have been in the cryptocurrency scene
            for many years, and have formed many partnerships with mainstream
            and crypto influencers that we are able to share with any project.
          </FeatureBox>
          <FeatureBox title="24/7 support" icon="chat">
            We here at Coinrizon understand the environment of crypto and how
            there are constantly problems that require attention. Due to this,
            we will always have a 24/7 support line for clients and our
            community, to make changes and deal with problems ASAP.
          </FeatureBox>
          <FeatureBox title="market reports" icon="show_chart">
            Our team has worked in many sectors such as finance, entertainment,
            new blockchains & more. Before starting our services, we will
            evaluate competitors and the current market to better target on
            certain areas.
          </FeatureBox>
          <FeatureBox title="personalized" icon="person">
            Coinrizon takes a more personal approach to marketing and focuses on
            influencer and spam free marketing, opposed to other agencies.
          </FeatureBox>
        </Grid>
      </Paper>
    </div>
  );
}

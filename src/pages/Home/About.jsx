import React, { Component } from "react";
import { Paper, Typography, Grid, Divider } from "@material-ui/core";
// Styles
import trouble from "../../images/trouble.png"
import worlds from "../../images/worlds.png"

const Title = {
  marginBottom: 10
}

export default class About extends Component {
  render() {
    return (
      <div>
        <Paper elevation="10" className="Paper">
          <Typography style={Title} variant="h4">ABOUT US</Typography>
          <Typography varient="p">
            During the last 3 years of the ICO market, a concept that was very
            foreign and unique was turned into something where mainstream
            influencers and celbrities have picked up. During these years, many
            services such as community management that were a luxury, have been
            turned into industry must-haves. Investors have had higher and
            higher requirements for projects, and no longer feel comfortable
            with investing in corporate entities, with little to no community
            interaction. Coinrizon has altered the services they provide to be
            more personal, and to focus on humanizing companies, therefore
            comforting investors. With our advanced skills in crisis management,
            quallity control and out strict spam free services, coinrizen is
            truely one of a kind. Our blend of services are perfectly made and
            add real substance to any ICO/TGE/ITO/IPO
          </Typography>
          <Divider style={{margin: "50px 0px"}}/>
          <Grid container spacing={3} justify="space-evenly" style={{textAlign: "center"}}>
            <Grid item sm={6} xs={12}>
              <img style={{height: 150}} src={worlds} alt="hands around people"/>
              <Typography style={Title} variant="h4">BEST OF BOTH WORLDS</Typography>
              <Typography component="p">
                The community shouldn't have to suffer during development, nor
                should development suffer from divided attention. Developers
                should be able to constantly engage and communicate salient
                updates to its community without having to sacrifice development
                time. The community should also be able to have pressing
                concerns addressed and have access to the two-way communication
                channel at any and all times. At Coinrizon, bridging this
                disconnect/divide is what we do. Our highly-talented,
                multi-disciplinary team with proven industry track record not
                only bridges communication and engagement but also becomes an
                extension of the team, providing them with critical and crucial
                data on community sentiment and market reactions. From community
                management to engagement, marketing, and market insight,
                publicity and consultancy, our team is always at hand, 24 hours
                a day, 7 days a week.
              </Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
              <img style={{height: 150}} src={trouble} alt="hands around people"/>
              <Typography style={Title} variant="h4">
                CRYPTO COMMUNITY TROUBLE
              </Typography>
              <Typography component="p">
                With a reported ROI of over 11000%, blockchain-based investment
                opportunities through cryptocurrencies have become one of the
                most exciting investment vehicle in the market. Investors and
                speculators are perpetually on the hunt for the next innovation
                within the industry that will take them to the moon. However, a
                lot has changed since the first ICO in 2014. The market is now
                rapidly approaching saturation point and innovative projects are
                having a challenging time getting noticed without selling an arm
                and a leg.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}
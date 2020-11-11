import React from 'react';
import GoogleMapsContainer from './Map'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function Listings({listings, match}) {
  const classes = useStyles();
  const id = parseInt(match.params.id)
  const listing = listings.find(c => c.id === id)

  return (
    <div className={classes.root} id="details">
      <Typography variant="h3" component="h2" gutterBottom>
      {listing.name}
      </Typography>
      <Typography variant="h5" gutterBottom>
      Address: {listing.address}
      </Typography>
      <Typography variant="h6" gutterBottom>
      Hours: {listing.hours}
      </Typography>
      <br></br>
      <Typography variant="body1" gutterBottom>
      {listing.description}
      </Typography>
      <GoogleMapsContainer className="map" />
    </div>
  );
}


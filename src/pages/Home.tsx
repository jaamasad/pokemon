import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Button, Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  hero: {
    background: `url('static/images/hero.jpeg') no-repeat center center`,
    backgroundSize: 'cover',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
  },
  ctaButton: {
    marginTop: '12px',
    color: '#fff',
    borderColor: '#fff',
    '&:hover': {
      background: '#fff',
      color: '#000',
    },
  },
  infoSection: {
    padding: '12px',
    textAlign: 'center',
  },
  pokemonCard: {
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    margin: '12px',
    '& img': {
      maxWidth: '100%',
      height: 'auto',
    },
  },
  footer: {
    marginTop: '12px',
    padding: '6px',
    background: '#f0f0f0',
    textAlign: 'center',
  },
}));

export function Home() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.hero}>
        <Container>
          <Typography variant="h2">Welcome to the Pokemon Universe</Typography>
          <Typography variant="body1">
            Embark on a journey filled with excitement, friendship, and countless creatures to discover.
          </Typography>
          <Button variant="outlined" className={classes.ctaButton}>
            Explore Now
          </Button>
        </Container>
      </div>

      <section className={classes.infoSection}>
        <Container>
          <Typography variant="h3">Explore the Pokemon World</Typography>
          <Typography variant="body1">
            Discover a world of unique creatures with incredible powers. Catch, train, and battle your way to become a Pokemon Master.
          </Typography>
            <Box sx={{ display: 'flex' }}>
          <div className={classes.pokemonCard}>
            <img src="static/images/10.png" alt="Pikachu" />
            <Typography variant="h4">Pikachu</Typography>
            <Typography variant="body2">The electric-type Pokemon known for its lightning-fast speed and cute appearance.</Typography>
          </div>

          <div className={classes.pokemonCard}>
            <img src="static/images/12.png" alt="Charizard" />
            <Typography variant="h4">Charizard</Typography>
            <Typography variant="body2">This fire-breathing dragon is a powerful and iconic companion on your journey.</Typography>
          </div>

          <div className={classes.pokemonCard}>
            <img src="static/images/16.png" alt="Eevee" />
            <Typography variant="h4">Eevee</Typography>
            <Typography variant="body2">Eevee can evolve into various forms, each with its own unique abilities and traits.</Typography>
          </div>
          </Box>
        </Container>
      </section>

      <footer className={classes.footer}>
        <Container>
          <Typography variant="body2">&copy; 2023 Pokemon World. All rights reserved.</Typography>
        </Container>
      </footer>
    </div>
  );
}


import { Container, Typography, Button } from '@mui/material';

export function Home() {
    return (
        <Container maxWidth="md">
            <Typography variant="h2" align="center" gutterBottom>
                Welcome to the Pokémon World
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                Discover the fascinating world of Pokémon and become a Pokémon Trainer!
            </Typography>
            <Button variant="contained" sx={{ display: 'flex', margin: 'auto' }} color="primary">
                Get Started
            </Button>
        </Container>
    );
};

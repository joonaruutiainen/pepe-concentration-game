import React from 'react';
import { Stack, Typography } from '@mui/material';
import { PlayButton } from '../components';

const HomePage = () => {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center' gap={5}>
      <Typography variant='h1'>Welcome to the Pepe Concentration Game!</Typography>
      <PlayButton />
    </Stack>
  );
};

export default HomePage;
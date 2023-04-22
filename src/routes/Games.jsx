import React from 'react';
import { Stack } from '@mui/material';
import { GameModeCard } from '../components';
import Smugpepe from '../img/smugpepe.png';
import Pepelaugh from '../img/pepelaugh.png';

const Games = () => {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center' gap={5}>
      <GameModeCard mode='easy' image={Smugpepe} />
      <GameModeCard mode='hard' image={Pepelaugh} />
    </Stack>
  );
};

export default Games;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Fab } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const PlayButton = () => {
  const navigate = useNavigate();

  return (
    <Fab color='secondary' onClick={() => navigate('games')}>
      <PlayArrowIcon />
    </Fab>
  );
};

export default PlayButton;

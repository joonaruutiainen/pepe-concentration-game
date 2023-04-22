import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, Box, Typography } from '@mui/material';

const GameModeCard = (props) => {
  const { mode, image } = props;

  const navigate = useNavigate();

  return (
  <Card
      sx={{
        width: '370px',
        height: '320px',
        justifyContent: 'space-between',
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      onClick={() => navigate(mode)}
    >
      <CardMedia component='img' sx={{ height: '80%', backgroundColor: '#1565c0'}} src={image} /> 
      <Box sx={{ height: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='h2'>{`${mode.toUpperCase()} MODE`}</Typography>
      </Box>
    </Card>
  );
};

export default GameModeCard;
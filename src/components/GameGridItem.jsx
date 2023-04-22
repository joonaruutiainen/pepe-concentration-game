import React from 'react';
import { Grid, Card, CardMedia } from '@mui/material';
import PepeBackground from '../img/pepe-background.png'

const GameGridItem = (props) => {
  const { card, open, onClick } = props;

  return (
    <Grid
      key={card.id}
      container
      item
      xs={6}
      sm={4}
      md={3}
      lg={2}
      xl={1.5}
      xxl={1}
      justifyContent='center'
      alignItems='center'
      sx={{ strokeWidth: 1,  stroke: 'white' }}
    >
      {!card.cleared && (
        <Card
          key={card.id}
          sx={{
            width: '170px',
            height: '170px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={() => onClick(card.id)}
        >
          <CardMedia
            component='img'
            src={open ? card.img : PepeBackground}
            sx={open ? { backgroundColor: card.color || 'white' } : { background: 'linear-gradient(to bottom right, #aeb8c2, #273a4d)' }}
          />
        </Card>
      )}
      {!!card.cleared && <div style={{ width: '170px', height: '170px' }} />}
    </Grid>
  );
};

export default GameGridItem;

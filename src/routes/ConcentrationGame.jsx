import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Gladge from '../img/gladge.png';
import Madge from '../img/madge.png';
import Sadge from '../img/sadge.png';
import Smugpepe from '../img/smugpepe.png';
import Pepelaugh from '../img/pepelaugh.png';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { GameGridItem } from '../components';

const pepes = [
  { name: 'gladge', img: Gladge },
  { name: 'madge', img: Madge },
  { name: 'sadge', img: Sadge },
  { name: 'smugpepe', img: Smugpepe },
  { name: 'pepelaugh', img: Pepelaugh },
];

const getColor = (n) => {
  switch (n) {
    case 0:
      return 'Crimson';
    case 1:
      return 'DarkGreen';
    case 2:
      return 'MediumBlue';
    case 3:
      return 'Gold';
    case 4:
      return 'DarkOrange';
    case 5:
      return 'Purple';
    default:
      return 'white';
  }
}

const ConcentrationGame = () => {
  const { mode } = useParams();

  const [cards, setCards] = useState([]);
  const [openCardIds, setOpenCardIds] = useState([]);
  const [timer, setTimer] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const navigate = useNavigate();

  const easyCards = useMemo(() => pepes
    .flatMap((pepe, n) => ([{ ...pepe, color: getColor(n) }, { ...pepe, color: getColor(n) }]))
    .map((card, i) => ({ ...card, id: i})), []);

  const hardCards = useMemo(() => pepes
    .flatMap(pepe => ([...Array(6).keys()].flatMap(n => ([{ ...pepe, color: getColor(n) }, { ...pepe, color: getColor(n) }]))))
    .map((card, i) => ({ ...card, id: i })), []);

  useEffect(() => {
    if (mode === 'easy') setCards(easyCards.sort(() => Math.random() - 0.5));
    else setCards(hardCards.sort(() => Math.random() - 0.5));
  }, [easyCards, hardCards, mode]);

  useEffect(() => {
    if (cards.length > 0 && cards.every(c => c.cleared)) setGameOver(true);
  }, [cards]);
  
  const checkPair = useCallback((a, b) => {
    if (mode === 'easy') {
      if (a.name === b.name) return true
      return false
    }

    if (a.name === b.name && a.color === b.color) return true
    return false
  }, [mode])

  useEffect(() => {
    if (timer) {
      const t = setTimeout(() => {
        const pair = checkPair(cards.find(c => c.id === openCardIds[0]), cards.find(c => c.id === openCardIds[1]));
        if (pair) setCards(cards => cards.map(c => c.id === openCardIds[0]|| c.id === openCardIds[1]
          ? { ...c, cleared: true }
          : c
        ));
        setOpenCardIds([]);
        setTimer(false);
      }, 1000);
      return () => clearTimeout(t);
    }
  }, [cards, checkPair, openCardIds, timer])

  const openCard = useCallback(id => {
    if (openCardIds.length === 0) setOpenCardIds([id]);
    else {
      if (id !== openCardIds[0]) {
        setOpenCardIds(ids => ids.concat([id]));
        setTimer(true);
      }
    }
  }, [openCardIds])

  return gameOver
    ? (
      <Stack direction='column' gap={3} alignItems='center'>
        <Typography variant='h1'>Congratulations,</Typography>
        <Typography variant='h1'>you cleared the game!</Typography>
        <Button variant='outlined' size='large' fullWidth onClick={() => navigate('/games')}>New game</Button>
      </Stack>
    ) : (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <Container maxWidth='xxxl' sx={{ mt: 5 }}>
          <Grid container justifyContent='flex-start' rowSpacing={5} sx={{ mb: 5 }}>
            {cards.map(card => (
              <GameGridItem
                key={card.id}
                card={card}
                open={openCardIds.includes(card.id)}
                cleared={card.cleared}
                onClick={timer ? () => {} : openCard}
              />
            ))}
          </Grid>
        </Container>
      </Box>
  );
};

export default ConcentrationGame;
import React from 'react';
import { List, ListItem, Typography, Paper } from '@mui/material';
import { useAppSelector } from '../../redux/hooks';
import { selectList } from '../../redux/search';

const ListSearches: React.FC = () => {
  const originalList = useAppSelector(selectList);
  const reversedList = originalList;

  return (
    <Paper style={{ height: '100%', backgroundColor: '#6b79ef', padding: '16px'}}>
      <Typography variant="h6" style={{ color: '#ffffff', marginBottom: '16px', fontSize: '2rem', fontWeight: 'bold' }}>
        List of all searches:
      </Typography>
      <List>
      {originalList.length === 0 && 
          <ListItem
            sx={{
              marginLeft: '40px',
              marginTop: '40px',
            }}
          >
            <Typography style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#ffffff' }}>history is empty</Typography>
          </ListItem>}
        {reversedList.slice().reverse().map((item, index) => (
          <ListItem
            key={index}
            sx={{
              borderBottom: '1px solid #ffffff',
              '&:hover': {
                backgroundColor: '#4f5d95',
              },
            }}
          >
            <Typography style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#ffffff' }}>{item}</Typography>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ListSearches;

import React from 'react';
import { List, ListItem, Typography } from '@mui/material';
import { useAppSelector } from '../../redux/hooks';
import { selectList } from '../../redux/search';

const ListSearches: React.FC = () => {
  const originalList = useAppSelector(selectList);
  const reversedList = originalList.slice().reverse();

  return (
    <div>
      <Typography variant="h6">List of all searches:</Typography>
      <List>
        {reversedList.map((item, index) => (
          <ListItem key={index}>
            <Typography>{item}</Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListSearches;
